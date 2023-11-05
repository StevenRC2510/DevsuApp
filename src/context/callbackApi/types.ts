/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { AxiosRequestConfig } from 'axios';

export type CallbackProviderProps = {
  children: ReactNode;
};

export type CallbackProvider = {
  callbackApi: <T>(
    url: AxiosRequestConfig<T>['url'],
    customConfig?: AxiosRequestConfig,
  ) => Promise<T>;
};
