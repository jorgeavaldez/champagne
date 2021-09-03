import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import getConfig from "./config";


declare module "near-api-js" {
 class Contract {
   get_greeting(options: any): Promise<string>;
   set_greeting(options: any): Promise<undefined>;
 }
}

const nearConfig = getConfig(process.env.NODE_ENV || "development");

export async function initContract() {
  const near = await connect(
    Object.assign(
      {
        deps: {
          keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        },
      },
      nearConfig
    )
  );

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  const walletConnection = new WalletConnection(near, "stemmy");

  // Getting the Account ID. If still unauthorized, it's just empty string
  const accountId = walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  const contract = new Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: ["get_greeting"],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: ["set_greeting"],
    }
  );

  return {
    connection: walletConnection,
    accountId: accountId,
    contract,
  };
}

export function logout(connection, next) {
  connection.signOut();

  // reload page
  next();
}

export function login(connection) {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  connection.requestSignIn(nearConfig.contractName);
}
