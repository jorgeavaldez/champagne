import passport from "passport";
import walletStrategy from "./wallet";
import twitterStrategy from "./twitter";


walletStrategy(passport);
twitterStrategy(passport);

export default passport;
