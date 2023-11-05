import { FinancialProduct } from '@services/financial/types';
import { FinancialProductState } from '@context/financialProduct/types';

export const initialState: FinancialProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: new Date(),
};

export const defaultContextState: FinancialProductState = {
  financialProduct: initialState,
  resetProduct: () => undefined,
  updateProduct: () => undefined,
};
