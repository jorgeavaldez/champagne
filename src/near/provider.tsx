import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import { Near, Contract, WalletConnection } from "near-api-js";

import getConfig from "./config";
import { initContract, login as nearLogin, logout as nearLogout } from "./";

// TODO: add idx stuff from ceramic to store campaign data
// import { authenticate } from "../ceramic";

const { networkId } = getConfig(process.env.NODE_ENV || 'development');

interface NearCtx {
  networkId: string | null;
  connected: boolean;
  accountId: string | null;

  wallet: WalletConnection;
  contract: Contract;
  error: Error;
  signedIn: boolean;

  login: Function;
  logout: Function;
  ceramicLogin?: Function;
}

export const NearContext = createContext<NearCtx>({
  connected: false,
  accountId: null,
  networkId,
  wallet: null,
  contract: null,
  error: null,
  signedIn: false,

  login: () => {},
  logout: () => {},
  // ceramicLogin: () => {},
});

export default function NearProvider({ children }) {
  const [connected, setConnected] = useState(false);
  const [accountId, setAccountId] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState(null);

  const walletRef = useRef<WalletConnection>(null);
  const contractRef = useRef<Contract>(null);
  const nearRef = useRef<Near>(null);

  const login = useCallback(() => {
    if (connected) {
      nearLogin(walletRef.current);
    }
  }, [connected]);

  const logout = useCallback(
    (next) => {
      if (connected) {
        nearLogout(walletRef.current, next);
      }
    },
    [connected]
  );

  // TODO: figure out ceramic
  /* 
  const ceramicLogin = useCallback(
    () => {
      if (accountId && nearRef.current) {
        getPublicKey(walletRef.current, accountId).then(({ keyPair, publicKey }) => authenticate(keyPair, publicKey).then((res) => {
          console.log("res", res);
        }));
      }
    },
    [accountId]
  );
 */

  useEffect(() => {
    const init = async () => {
      try {
        const { wallet, accountId, contract, near } = await initContract();

        walletRef.current = wallet;
        contractRef.current = contract;
        nearRef.current = near;
        setAccountId(accountId);
        setConnected(true);
      } catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (connected && !error) {
      setSignedIn(walletRef.current.isSignedIn());
    }
  }, [connected, error]);

  const ctx = {
    networkId,
    connected,
    accountId,

    wallet: walletRef.current,
    contract: contractRef.current,
    // ceramicLogin,
    error,
    signedIn,

    login,
    logout,
  };

  return <NearContext.Provider value={ctx}>{children}</NearContext.Provider>;
}
