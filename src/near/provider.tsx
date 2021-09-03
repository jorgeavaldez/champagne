import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import { Contract, WalletConnection } from "near-api-js";

import getConfig from "./config";
import { initContract, login as nearLogin, logout as nearLogout } from "./";

const { networkId } = getConfig(process.env.NODE_ENV || 'development');

interface NearCtx {
  networkId: string | null;
  connected: boolean;
  accountId: string | null;

  connection: WalletConnection;
  contract: Contract;
  error: Error;
  signedIn: boolean;

  login: Function;
  logout: Function;
}

export const NearContext = createContext<NearCtx>({
  connected: false,
  accountId: null,
  networkId,
  connection: null,
  contract: null,
  error: null,
  signedIn: false,

  login: () => {},
  logout: () => {},
});

export default function NearProvider({ children }) {
  const [connected, setConnected] = useState(false);
  const [accountId, setAccountId] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState(null);

  const connectionRef = useRef<WalletConnection>(null);
  const contractRef = useRef<Contract>(null);

  const login = useCallback(() => {
    if (connected) {
      nearLogin(connectionRef.current);
    }
  }, [connected]);

  const logout = useCallback(
    (next) => {
      if (connected) {
        nearLogout(connectionRef.current, next);
      }
    },
    [connected]
  );

  useEffect(() => {
    const init = async () => {
      try {
        const { connection, accountId, contract } = await initContract();

        connectionRef.current = connection;
        contractRef.current = contract;
        setAccountId(accountId);
        setConnected(true);
      }

      catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (connected && !error) {
      setSignedIn(connectionRef.current.isSignedIn());
    }
  }, [connected, error]);

  const ctx = {
    networkId,
    connected,
    accountId,

    connection: connectionRef.current,
    contract: contractRef.current,
    error,
    signedIn,

    login,
    logout,
  };

  return <NearContext.Provider value={ctx}>{children}</NearContext.Provider>;
}
