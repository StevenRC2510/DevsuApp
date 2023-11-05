import React, { ReactNode } from 'react';
import { renderHook, waitFor } from '@testing-library/react-native';

import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import FinancialProductProvider, { useFinancialProductState } from '@context/financialProduct';
import { initialState } from './constants';

describe('-> financialProductContext ', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <FinancialProductProvider>{children}</FinancialProductProvider>
  );

  it('Should test that the context is correctly initialized with default values', async () => {
    const { result } = renderHook(() => useFinancialProductState(), { wrapper });
    const product = generateMockedFinancialProduct();

    expect(result.current.financialProduct).toEqual(initialState);
    expect(typeof result.current.resetProduct).toEqual('function');
    expect(typeof result.current.updateProduct).toEqual('function');

    result.current.updateProduct(product);
    await waitFor(() => {
      expect(result.current.financialProduct).toEqual(product);
    });
  });
});
