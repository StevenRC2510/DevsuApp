import {
  useMutation, UseMutationOptions, useQuery, UseQueryOptions,
} from 'react-query';

import environment from '@utils/environment';
import { useCallbackApi } from '@context/callbackApi';

import { FinancialProduct } from '@services/financial/types';
import { QueriesKeyConstants, FinancialServicesConstants } from '@services/financial/constants';

const {
  appsUrl: {
    financial: { api: baseURL },
  },
} = environment;

const useGetFinancialProducts = (options?: UseQueryOptions<FinancialProduct[]>) => {
  const { callbackApi } = useCallbackApi();

  return useQuery<FinancialProduct[]>(
    [QueriesKeyConstants.GET_PRODUCTS_KEY],
    async () => {
      const response = await callbackApi<FinancialProduct[]>(FinancialServicesConstants.PRODUCTS, {
        method: 'GET',
        baseURL,
      });
      return response;
    },
    {
      ...options,
    },
  );
};

const useCreateFinancialProduct = (
  options?: UseMutationOptions<FinancialProduct, { data: string }, FinancialProduct>,
) => {
  const { callbackApi } = useCallbackApi();
  return useMutation<FinancialProduct, { data: string }, FinancialProduct>(
    (body) => callbackApi<FinancialProduct>(FinancialServicesConstants.PRODUCTS, {
      method: 'POST',
      baseURL,
      data: body,
    }),
    options,
  );
};

const useUpdateFinancialProduct = (
  options?: UseMutationOptions<FinancialProduct, { data: string }, FinancialProduct>,
) => {
  const { callbackApi } = useCallbackApi();
  return useMutation<FinancialProduct, { data: string }, FinancialProduct>(
    (body: FinancialProduct) => callbackApi<FinancialProduct>(FinancialServicesConstants.PRODUCTS, {
      method: 'PUT',
      baseURL,
      data: body,
    }),
    options,
  );
};
const useDeleteFinancialProduct = (options?: UseMutationOptions<Response, unknown, { id: FinancialProduct['id'] }>) => {
  const { callbackApi } = useCallbackApi();
  return useMutation<Response, unknown, { id: FinancialProduct['id'] }>(
    ({ id }) => callbackApi<Response>(FinancialServicesConstants.PRODUCTS, {
      method: 'DELETE',
      baseURL,
      params: { id },
    }),
    options,
  );
};

const useGetVerificationFinancialProducts = (productId: FinancialProduct['id'], options?: UseQueryOptions<boolean>) => {
  const { callbackApi } = useCallbackApi();

  return useQuery<boolean>(
    [QueriesKeyConstants.GET_VERIFICATION_PRODUCT_KEY, productId],
    async () => {
      const response = await callbackApi<boolean>(FinancialServicesConstants.VERIFICATION_PRODUCT, {
        method: 'GET',
        baseURL,
        params: {
          id: productId,
        },
      });
      return response;
    },
    {
      ...options,
    },
  );
};

export {
  useGetFinancialProducts,
  useCreateFinancialProduct,
  useUpdateFinancialProduct,
  useDeleteFinancialProduct,
  useGetVerificationFinancialProducts,
};
