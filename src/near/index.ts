import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { getLinkdropUserAccountId } from "./helpers";

import getConfig from "./config";

declare module "near-api-js" {
 class Contract {
   create_user_account(...options: any[]): Promise<undefined>;
   create_near_campaign(...options: any[]): Promise<undefined>;
 }
}

// const nearConfig = getConfig(process.env.NODE_ENV || "development");
const nearConfig = getConfig("development");


export async function initUserContract(walletAccountId) {
  const linkdropAccountId = getLinkdropUserAccountId(walletAccountId);
  const { near, wallet, keyStore } = await initNearShit();

  const contract = new Contract(
    wallet.account(),
    linkdropAccountId,
    {
      changeMethods: ["create_near_campaign"],
      viewMethods: [],
    }
  );

  return {
    near,
    wallet,
    linkdropAccountId,
    contract,
    keyStore,
  };
}

export async function initLinkdropContract() {
  const { near, wallet } = await initNearShit();

  const accountId = wallet.getAccountId();

  const contract = new Contract(
    wallet.account(),
    nearConfig.contractName,
    {
      changeMethods: ["create_user_account"],
      viewMethods: [],
    }
  );

  console.log('near', nearConfig.contractName);
  return {
    near,
    wallet,
    accountId,
    contract,
  };
}

export async function initNearShit() {
  const keyStore = new keyStores.BrowserLocalStorageKeyStore();
  const near = await connect({
    ...nearConfig,
    deps: {
      keyStore,
    },
  });

  const wallet = new WalletConnection(near, "champagne");

  return {
    near,
    wallet,
    keyStore,
  };
}