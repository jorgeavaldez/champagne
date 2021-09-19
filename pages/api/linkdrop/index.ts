import nextConnect from "next-connect";

import getConfig from "src/near/config";
import auth from "src/backend/middleware";
import { getLinkdropUserAccountId } from "src/near/helpers";
import prisma from "src/backend/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
});

handler
  .use(auth)
  .post(
    // create db version of linkdrop account
    // for both create and restore
    // assumes user created the linkdrop account
    async (req: NextApiRequest, res: NextApiResponse) => {
      const { publicKey } = req.body;

      const linkdropUserAccountId = getLinkdropUserAccountId(
        req.user.accountId
      );

      const linkdropAccount = await prisma.linkdropAccount.upsert({
        create: {
          publicKey,
          accountId: linkdropUserAccountId,
          walletAccountId: req.user.accountId,
        },
        update: {
          publicKey,
          accountId: linkdropUserAccountId,
        },
        where: {
          accountId: linkdropUserAccountId,
        }
      });

      return res.status(201).json({
        linkdropAccount,
      })
    }
  )
  .get(
    // check if near and db have linkdrop account
    // 204 == db does not have, but near does, restore
    // 200 == a ok
    async (req: NextApiRequest, res: NextApiResponse) => {
      if (!req.user) {
        return res.status(401).end();
      }

      // near has account, check if we do
      const { linkdropAccount } = await prisma.walletAccount.findUnique({
        where: {
          accountId: req.user.accountId,
        },
        select: {
          linkdropAccount: true,
        },
      });

      if (!linkdropAccount) {
        return res.status(204).end();
      }

      console.log(linkdropAccount);
      return res.status(200).json({ accountId: linkdropAccount.accountId });
    }
  );

export default handler;
