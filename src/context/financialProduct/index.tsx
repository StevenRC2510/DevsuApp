import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from 'react';

import { FinancialProduct } from '@services/financial/types';
import { FinancialProductState } from '@context/financialProduct/types';
import {
  defaultContextState,
  initialState,
} from '@context/financialProduct/constants';

const FinancialProductContext = createContext<FinancialProductState>(defaultContextState);
function FinancialProductProvider({ children }: PropsWithChildren) {
  const [financialProduct, setFinancialProduct] = useState<FinancialProduct>(initialState);

  const resetProduct = () => setFinancialProduct(initialState);

  const updateProduct = (newProduct: FinancialProduct) => setFinancialProduct((prevState) => ({
    ...prevState,
    ...newProduct,
  }));

  const currentValue = useMemo(
    () => ({
      financialProduct,
      resetProduct,
      updateProduct,
    }),
    [financialProduct],
  );

  return (
    <FinancialProductContext.Provider value={currentValue}>
      {children}
    </FinancialProductContext.Provider>
  );
}

export default FinancialProductProvider;

export function useFinancialProductState(): FinancialProductState {
  return useContext(FinancialProductContext);
}
