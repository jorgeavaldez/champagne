// This file does two things:
//
// 1. Compile the Rust contract using cargo in docker (see buildCmd below). This will
//    create a wasm file in the 'target' folder.
// 2. Create a symbolic link (symlink) to the generated wasm file in the root
//    project's `out` folder, for easy use with near-cli.
//
const sh = require("shelljs");

// Figure out which directory the user called this script from, which we'll use
// later to set up the symlink.
const calledFromDir = sh.pwd().toString();

const debug = process.argv.pop() === "--debug";

const buildCmd = debug
  ? "docker-compose run --rm contracts bash -c \"env 'RUSTFLAGS=-C link-arg=-s' cargo build --target wasm32-unknown-unknown\""
  : "docker-compose run --rm contracts bash -c \"env 'RUSTFLAGS=-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\"";

const { code } = sh.exec(buildCmd);

sh.cd("./contracts.near-linkdrop");

// Assuming this is compiled from the root project directory, link the compiled
// contract to the `out` folder –
// When running commands like `near deploy`, near-cli looks for a contract at
// <CURRENT_DIRECTORY>/out/main.wasm
if (code === 0 && calledFromDir === __dirname) {
  const linkDir = `${calledFromDir}/out`;
  const link = `${calledFromDir}/out/main.wasm`;

  const packageName = require("fs")
    .readFileSync(`./Cargo.toml`)
    .toString()
    .match(/name = "([^"]+)"/)[1].split('-')[0];

  const outFile = `./target/wasm32-unknown-unknown/${
    debug ? "debug" : "release"
  }/${packageName}.wasm`;

  sh.mkdir("-p", linkDir);
  sh.rm("-f", link);

  //fixes #831: copy-update instead of linking .- sometimes sh.ln does not work on Windows
  sh.cp("-u", outFile, link);
}

// exit script with the same code as the build command
process.exit(code);
