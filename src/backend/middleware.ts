import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import morgan from 'morgan';
import session from "./session";
import passport from "./passport";
import { WalletAccount } from ".prisma/client";

declare module "next" {
  interface NextApiRequest {
    body: any;
    session: any;
    user: WalletAccount;
    logout: Function;
  }
}

const auth =  nextConnect<NextApiRequest, NextApiResponse>()
  .use(morgan('dev'))
  .use(
    session({
      name: "sess",
      // TODO: add token secret
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
      },
    })
  )
  .use(passport.initialize())
  .use(passport.session());

export default auth;
