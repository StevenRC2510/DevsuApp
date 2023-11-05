import { FinancialProduct } from '@services/financial/types';

export interface FinancialProductState {
  financialProduct: FinancialProduct;
  resetProduct: () => void;
  updateProduct: (newProduct: FinancialProduct) => void;
}
