import React, { createContext, useContext, useMemo } from 'react';

import {
  CallbackProvider,
  CallbackProviderProps,
} from '@context/callbackApi/types';
import callbackApi from '@context/callbackApi/callback';

const defaultValue: CallbackProvider = { callbackApi };

const CallbackApiContext = createContext<CallbackProvider>(defaultValue);

function CallbackApiProvider({ children }: CallbackProviderProps) {
  const contextValue = useMemo(() => ({ callbackApi }), []);

  return (
    <CallbackApiContext.Provider value={contextValue}>
      {children}
    </CallbackApiContext.Provider>
  );
}

const useCallbackApi = () => useContext(CallbackApiContext);

export { useCallbackApi, CallbackApiProvider };
