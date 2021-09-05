import { DID } from "dids";
import * as uint8arrays from 'uint8arrays';
import { KeyPair, Near } from "near-api-js";
import { IDX } from "@ceramicstudio/idx";
import { NearAuthProvider } from "@ceramicnetwork/blockchain-utils-linking";
import { ThreeIdConnect } from "@3id/connect";
import CeramicClient from "@ceramicnetwork/http-client";
import KeyDidResolver from "key-did-resolver";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";

import getConfig from "../near/config";

const { ceramicUrl, networkId } = getConfig(
  process.env.NODE_ENV || "development"
);

const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

const resolver = {
  ...KeyDidResolver.getResolver(),
  ...ThreeIdResolver.getResolver(ceramic),
};

const did = new DID({ resolver });
ceramic.setDID(did);

const idxAliases = {};

const idx = new IDX({
  ceramic,
  // aliases,
});

export class NearSigner {
  provider = null;
  // Pass in the keypair class
  // REF: https://near.github.io/near-api-js/classes/_utils_key_pair_.keypair.html
  constructor(nearKeyPair) {
    this.provider = nearKeyPair;
  }

  // return: Promise<{ signature: String, account: String }>
  async sign(message) {
    const { signature, publicKey } = await this.provider.sign(
      uint8arrays.fromString(message)
    );
    return {
      signature: uint8arrays.toString(signature, 'base64pad'),
      account: uint8arrays.toString(publicKey.data, 'base64pad'),
    };
  }
}

export async function authenticate(nearKeyInstance: KeyPair, accountId) {
  const nearProvider = new NearSigner(nearKeyInstance);

  console.log(accountId);
  try {
    // TODO: add aliases here for twitter
    const threeIdConnect = new ThreeIdConnect();
    const authProvider = new NearAuthProvider(nearProvider, accountId, "testnet");
    await threeIdConnect.setAuthProvider(authProvider)
    await threeIdConnect.connect(authProvider);
    const provider = await threeIdConnect.getDidProvider();
    await ceramic.did.setProvider(provider);
    await ceramic.did.authenticate();
  } catch (e) {
    console.log(e);
  }

    console.log( ceramic.did.authenticated );
}
