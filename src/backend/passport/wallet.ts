import LocalStrategy from "passport-local";
import passportLocalNear from "passport-local-near";
import { baseEncode } from "near-api-js/node_modules/borsh";

import prisma from "src/backend/prisma";
import { WalletAccount } from ".prisma/client";

// local passport near doesn't handle user persistence so i'm hijacking it with
// the request to do it myself based on the callbacks
export const authenticateWalletAccount = async (
  req,
  accountId,
  signedMessage,
  actualDone
) => {

  if (req.user) {
    // TODO: determine what this even does since i assume we're fine and
    // shouldn't be updating the signed messages again anyways
    return actualDone(null, req.user);
  }

  let data = JSON.parse(signedMessage);

  const publicKey = `ed25519:${baseEncode(Uint8Array.from(Object.values(data.publicKey.data)))}`;

  const wrappedDone = async (err, accountId: string | false) => {
    if (!err && accountId !== false) {
      // Create walletAccount
      try {
        let wallet = await prisma.walletAccount.findUnique({
          where: {
            accountId,
          },
        });

        if (!wallet) {
          wallet = await prisma.walletAccount.create({
            data: {
              accountId,
              publicKey,
            },
          });
        }

        return actualDone(null, wallet);
      } catch (e) {
        // We shouldn't get here typically
        return actualDone(e, false);
      }
    } else {
      console.log("what", err);
      return actualDone(err, false);
    }
  };

  return passportLocalNear.authenticate(accountId, signedMessage, wrappedDone);
};

export default function walletStrategy(passport) {
  passport.serializeUser(function (wallet: WalletAccount, done) {
    done(null, wallet.accountId);
  });

  passport.deserializeUser(async function (accountId: string, done) {
    try {
      const wallet = await prisma.walletAccount.findUnique({
        where: { accountId },
      });

      // TODO: log could not find wallet, right now it'll just return null

      return done(null, wallet);
    } catch (e) {
      return done(e, false, { err: e.toString() });
    }
  });

  passportLocalNear.set_network("testnet");

  passport.use(
    new LocalStrategy(
      {
        usernameField: "accountId",
        passwordField: "signedMessage",
        passReqToCallback: true,
      },
      authenticateWalletAccount
    )
  );
}