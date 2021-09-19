import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import { Near, KeyPair, Contract, WalletConnection, keyStores } from "near-api-js";

import getConfig from "./config";
import { initUserContract } from "./";
import { useNear } from "./hooks";

// const { networkId } = getConfig(process.env.NODE_ENV || 'development');
const { networkId, contractName } = getConfig("development");

interface LinkdropUserCtx {
  networkId: string | null;
  connected: boolean;
  accountId: string | null;

  wallet: WalletConnection;
  contract: Contract;
  near: Near;
  error: Error;
  signedIn: boolean;
  keysSet: boolean;
  keyStore: keyStores.BrowserLocalStorageKeyStore,

  setKeys: Function;
  login: Function;
  logout: Function;
}

export const LinkdropUserContext = createContext<LinkdropUserCtx>({
  connected: false,
  accountId: null,
  networkId,
  wallet: null,
  contract: null,
  near: null,
  error: null,
  signedIn: false,
  keysSet: false,
  keyStore: null,

  setKeys: () => {},
  login: () => {},
  logout: () => {},
});

export default function LinkdropUserProvider({ children }) {
  const { accountId } = useNear();
  const [connected, setConnected] = useState(false);
  const [linkdropUserAccountId, setLinkdropUserAccountId] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState(null);
  const [keysSet, setKeysSet] = useState(false);

  const walletRef = useRef<WalletConnection>(null);
  const contractRef = useRef<Contract>(null);
  const nearRef = useRef<Near>(null);
  const keyStoreRef = useRef<keyStores.BrowserLocalStorageKeyStore>(null);

  const login = useCallback(() => {
    if (connected) {
      walletRef.current.requestSignIn(
        contractName,
        "Champagne",
        `${window.location.protocol}//${window.location.host}/wallet/login`
      );
    }
  }, [connected]);

  const logout = useCallback(() => {
    if (connected) {
      walletRef.current.signOut();
      setSignedIn(walletRef.current.isSignedIn());
    }
  }, [connected]);

  useEffect(() => {
    const init = async () => {
      try {
        const { linkdropAccountId, wallet, contract, near, keyStore } =
          await initUserContract(accountId);

        walletRef.current = wallet;
        contractRef.current = contract;
        nearRef.current = near;
        keyStoreRef.current = keyStore;
        setLinkdropUserAccountId(linkdropAccountId);
        setConnected(true);
      } catch (err) {
        setError(err);
      }
    };

    if (accountId) {
      init();
    }
  }, [accountId]);

  useEffect(() => {
    if (connected && !error) {
      setSignedIn(walletRef.current.isSignedIn());
    }
  }, [connected, error]);

  const setKeys = useCallback((keys) => {
    keyStoreRef.current.setKey(
      networkId,
      linkdropUserAccountId,
      KeyPair.fromString(keys.secretKey),
    ).then(() => {
      setKeysSet(true);
    });
  }, [linkdropUserAccountId]);

  const ctx = {
    networkId,
    connected,
    accountId: linkdropUserAccountId,

    wallet: walletRef.current,
    contract: contractRef.current,
    near: nearRef.current,
    keyStore: keyStoreRef.current,
    error,
    signedIn,
    setKeys,
    keysSet,

    login,
    logout,
  };

  return (
    <LinkdropUserContext.Provider value={ctx}>
      {children}
    </LinkdropUserContext.Provider>
  );
}
