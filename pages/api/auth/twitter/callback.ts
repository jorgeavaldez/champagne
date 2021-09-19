import nextConnect from "next-connect";
import auth from "src/backend/middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "src/backend/passport";

const handler = nextConnect();

handler.use(auth).get(passport.authorize("twitter"));

export default handler;
