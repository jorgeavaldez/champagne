import nextConnect from "next-connect";
import auth from "src/backend/middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "src/backend/passport";

const handler = nextConnect();

handler
  .use(auth)
  .get(
    (req: NextApiRequest, res: NextApiResponse) => {
      req.logout();
      res.status(204).end();
    }
  );

export default handler;
