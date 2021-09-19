import { Strategy as TwitterStrategy } from "passport-twitter";

import prisma from "src/backend/prisma";
import { SocialAccount, WalletAccount } from ".prisma/client";
import { profile } from "console";

const upsertSocialAccount = async (
  wallet: WalletAccount,
  token: string,
  tokenSecret: string,
  profile
): Promise<SocialAccount | null> =>
  prisma.socialAccount.upsert({
    create: {
      providerType: profile.provider,
      providerId: profile.id,
      providerAccountId: profile.displayName,
      oauthToken: token,
      oauthTokenSecret: tokenSecret,
      walletAccountId: wallet.accountId,
    },
    update: {
      providerAccountId: profile.displayName,
      oauthToken: token,
      oauthTokenSecret: tokenSecret,
    },
    where: {
      providerId_providerType_walletAccountId: { 
        providerType: profile.provider,
        providerId: profile.id,
        walletAccountId: wallet.accountId, 
      },
    }
  });

export default function twitterAuthorizationStrategy(passport) {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackUrl: `${process.env.AUTH_URL}/auth/twitter/callback`,
        passReqToCallback: true,
      },
      async function (req, token, tokenSecret, profile, done) {
        if (!req.user) {
          return done(null, false, { error: "User is not logged in" });
        }

        const wallet: WalletAccount = req.user;
        const socialAccount = await upsertSocialAccount(
          wallet,
          token,
          tokenSecret,
          profile
        );

        if (!socialAccount) {
          return done(null, false, { error: "Could not update or create social account" });
        }

        return done(null, socialAccount);
      }
    )
  );
}
