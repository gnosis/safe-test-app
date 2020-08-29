import React, { createContext, useState, useContext, useEffect } from "react";
import initSdk, { SdkInstance, SafeInfo } from "@gnosis.pm/safe-apps-sdk";

interface State {
  appsSdk: SdkInstance | undefined;
  safeInfo: SafeInfo | undefined;
}

const initialState: State = {
  appsSdk: undefined,
  safeInfo: undefined,
};

const stateCtx = createContext<State>(initialState);

export const useSafeApp = (): State => useContext(stateCtx);

const SafeAppProvider: React.FC = ({ children }) => {
  const [appsSdk] = useState(initSdk());
  const [safeInfo, setSafeInfo] = useState<SafeInfo>();

  useEffect(() => {
    appsSdk.addListeners({
      onSafeInfo: (info) => {
        if (!safeInfo) {
          setSafeInfo(info);
        }
      },
    });

    return () => appsSdk.removeListeners();
  }, [appsSdk, safeInfo]);

  return (
    <stateCtx.Provider value={{ appsSdk, safeInfo }}>
      {children}
    </stateCtx.Provider>
  );
};

export default SafeAppProvider;
