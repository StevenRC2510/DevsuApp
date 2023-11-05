/* eslint-disable @typescript-eslint/no-shadow */
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act, renderHook, waitFor } from '@testing-library/react-native';

import {
  useGetFinancialProducts,
  useCreateFinancialProduct,
  useDeleteFinancialProduct,
  useUpdateFinancialProduct,
  useGetVerificationFinancialProducts,
} from '@services/financial';

import { useCallbackApi } from '@context/callbackApi';
import { FinancialProduct } from '@services/financial/types';
import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import { FinancialServicesConstants } from '@services/financial/constants';

const callbackApiMock = jest.fn();
const baseUrl = 'mockedBaseUrl';

jest.mock('@context/callbackApi');

(useCallbackApi as jest.Mock).mockReturnValue({
  callbackApi: callbackApiMock,
});

jest.mock('../../utils/environment', () => ({
  appsUrl: {
    financial: {
      api: 'mockedBaseUrl',
    },
  },
}));

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Financial::Services', () => {
  const financialProduct = generateMockedFinancialProduct();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Financial::useGetVerificationFinancialProducts', async () => {
    const id = '1';
    callbackApiMock.mockReturnValue(true);

    const { result } = renderHook(
      () => useGetVerificationFinancialProducts(id),
      {
        wrapper,
      },
    );

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    await waitFor(() => expect(result.current.data).toEqual(true));
    await waitFor(() => expect(callbackApiMock).toHaveBeenCalledWith(
      FinancialServicesConstants.VERIFICATION_PRODUCT,
      {
        method: 'GET',
        baseURL: baseUrl,
        params: { id },
      },
    ));
  });

  it('Financial::useGetFinancialProducts', async () => {
    const serverResponse: FinancialProduct[] = [financialProduct];
    callbackApiMock.mockReturnValue(serverResponse);

    const { result } = renderHook(() => useGetFinancialProducts(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    await waitFor(() => expect(result.current.data).toEqual([financialProduct]));
    await waitFor(() => expect(callbackApiMock).toHaveBeenCalledWith(
      FinancialServicesConstants.PRODUCTS,
      {
        method: 'GET',
        baseURL: baseUrl,
      },
    ));
  });

  it('Financial::useCreateFinancialProduct', async () => {
    callbackApiMock.mockReturnValue(financialProduct);
    const { result } = renderHook(() => useCreateFinancialProduct(), {
      wrapper,
    });

    await act(() => {
      result.current.mutate(financialProduct);
    });

    await waitFor(() => result.current.isSuccess);
    await waitFor(() => expect(result.current.data).toEqual(financialProduct));

    await waitFor(() => expect(callbackApiMock).toHaveBeenCalledWith(
      FinancialServicesConstants.PRODUCTS,
      {
        method: 'POST',
        baseURL: baseUrl,
        data: financialProduct,
      },
    ));
  });

  it('Financial::useUpdateFinancialProduct', async () => {
    callbackApiMock.mockReturnValue(financialProduct);
    const { result } = renderHook(() => useUpdateFinancialProduct(), {
      wrapper,
    });

    await act(() => {
      result.current.mutate(financialProduct);
    });
    await waitFor(() => result.current.isSuccess);

    await waitFor(() => expect(result.current.data).toEqual(financialProduct));

    await waitFor(() => expect(callbackApiMock).toHaveBeenCalledWith(
      FinancialServicesConstants.PRODUCTS,
      {
        method: 'PUT',
        baseURL: baseUrl,
        data: financialProduct,
      },
    ));
  });

  it('Financial::useDeleteFinancialProduct', async () => {
    const id = '1';
    callbackApiMock.mockReturnValue(true);
    const { result } = renderHook(() => useDeleteFinancialProduct(), {
      wrapper,
    });

    await act(() => {
      result.current.mutate({ id });
    });
    await waitFor(() => result.current.isSuccess);
    await waitFor(() => expect(result.current.data).toEqual(true));
    await waitFor(() => expect(callbackApiMock).toHaveBeenCalledWith(
      FinancialServicesConstants.PRODUCTS,
      {
        method: 'DELETE',
        baseURL: baseUrl,
        params: { id },
      },
    ));
  });
});
