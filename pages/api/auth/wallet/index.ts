import nextConnect from "next-connect";
import auth from "src/backend/middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "src/backend/passport";

const handler = nextConnect({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
});

handler
  .use(auth)
  .post(
    passport.authenticate("local"),
    (req: NextApiRequest, res: NextApiResponse) => {
      res.json({ wallet: req.user });
    }
  )
  .get(
    (req: NextApiRequest, res: NextApiResponse) => {
      if (!req.user) {
        res.status(401).end();
      }

      else {
        res.json({ wallet: req.user });
      }
    }
  );

export default handler;
