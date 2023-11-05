import { FinancialProduct } from '@services/financial/types';

type AdditionalProps = {
  isLastItem: boolean;
};

export type ItemProps = FinancialProduct & AdditionalProps;
