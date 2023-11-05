import { RouteProp } from '@react-navigation/native';

import FinancialProductForm from '@screens/financialProductForm';
import FinancialProductList from '@screens/financialProductsList';
import FinancialProductDetail from '@screens/financialProductDetail';

export enum FinancialProductRoutes {
  FINANCIAL_PRODUCT_LIST = 'FINANCIAL PRODUCT LIST',
  FINANCIAL_PRODUCT_DETAIL = 'FINANCIAL PRODUCT DETAIL',
  FINANCIAL_PRODUCT_CREATE = 'FINANCIAL PRODUCT CREATE',
}

type RootStackParamList = {
  [FinancialProductRoutes.FINANCIAL_PRODUCT_CREATE]: { isEdit?: boolean };
};

export type FinancialProductFormRouteProp = RouteProp<
RootStackParamList,
FinancialProductRoutes.FINANCIAL_PRODUCT_CREATE
>;

export const financialProductRoutes = [
  {
    name: FinancialProductRoutes.FINANCIAL_PRODUCT_LIST,
    component: FinancialProductList,
  },
  {
    name: FinancialProductRoutes.FINANCIAL_PRODUCT_DETAIL,
    component: FinancialProductDetail,
    initialParams: { id: null },
  },
  {
    name: FinancialProductRoutes.FINANCIAL_PRODUCT_CREATE,
    component: FinancialProductForm,
  },
];

export const routes = [...financialProductRoutes];
