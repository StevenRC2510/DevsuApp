/* eslint-disable */
//@ts-nocheck

import React, { ComponentProps, ReactNode, ComponentType, FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { render } from '@testing-library/react-native';

type Providers = [ComponentType<any>, ComponentProps<any>?][];

const combineProviders = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      // eslint-disable-next-line react/display-name
      ({ children }) =>
        (
          <AccumulatedProviders>
            <Provider {...props}>{children}</Provider>
          </AccumulatedProviders>
        ),
    ({ children }) => children,
  );

export function makeWrapper<T>(
  Comp: React.ElementType,
  options?: {
    defaultProps?: T;
    ExtraProviders?: Providers;
    WrapperComp?: React.ElementType;
  },
): (newProps?: T) => { props: T; rerender: any } {
  const { defaultProps = {}, ExtraProviders = null } = options ?? {};
  const AllProviders = ExtraProviders
    ? combineProviders(ExtraProviders)
    : ({ children }: { children: React.ReactNode }) => <>{children}</>;

  return function (newProps?: T) {
    const props = { ...defaultProps, ...newProps };
    const queryClient = new QueryClient();

    const Wrapper = options?.WrapperComp
      ? options.WrapperComp
      : ({ children }: { children: ReactNode }) => <div>{children}</div>;

    const { rerender } = render(
      <QueryClientProvider client={queryClient}>
        <AllProviders>
          <Wrapper>
            <Comp {...props} />
          </Wrapper>
        </AllProviders>
      </QueryClientProvider>,
    );
    return { props: props as T, rerender };
  };
}
