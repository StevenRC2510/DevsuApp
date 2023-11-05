import { screen, fireEvent, waitFor } from '@testing-library/react-native';
import { UseQueryResult } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import * as services from '@services/financial';
import { FinancialProductRoutes } from '@navigation/routes';

import FinancialProductList from '@screens/financialProductsList';

import { FinancialProduct } from '@services/financial/types';
import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import { makeWrapper } from '@utils/testing/wrapper';

jest.mock('@context/financialProduct', () => ({
  useFinancialProductState: jest.fn(() => ({
    updateProduct: jest.fn(),
  })),
}));

const useGetFinancialProductListSpy = jest.spyOn(services, 'useGetFinancialProducts');

describe('ProductsList::Screen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render the list screen correctly', () => {
    const financialProduct = [generateMockedFinancialProduct()];
    useGetFinancialProductListSpy.mockReturnValueOnce({
      data: financialProduct,
    } as unknown as UseQueryResult<FinancialProduct[]>);
    const testContainer = makeWrapper(FinancialProductList);
    testContainer();

    const listComponent = screen.getByTestId('productList');

    expect(listComponent).toBeDefined();
  });

  test('Should render the loading content', () => {
    useGetFinancialProductListSpy.mockReturnValueOnce({
      data: undefined,
      isLoading: true,
    } as unknown as UseQueryResult<FinancialProduct[]>);
    const testContainer = makeWrapper(FinancialProductList);
    testContainer();

    const loadingComponent = screen.getByTestId('productListLoading');

    expect(loadingComponent).toBeDefined();
  });

  test('Should render the empty content', () => {
    useGetFinancialProductListSpy.mockReturnValueOnce({
      data: [],
    } as unknown as UseQueryResult<FinancialProduct[]>);
    const testContainer = makeWrapper(FinancialProductList);
    testContainer();

    const emptyContentComponent = screen.getByTestId('productListEmptyData');

    expect(emptyContentComponent).toBeDefined();
  });

  test('Should navigate to create screen', () => {
    useGetFinancialProductListSpy.mockReturnValueOnce({
      data: [],
    } as unknown as UseQueryResult<FinancialProduct[]>);
    const testContainer = makeWrapper(FinancialProductList);
    testContainer();

    const buttonComponent = screen.getByTestId('addButton');

    fireEvent.press(buttonComponent);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitFor(() => {
      expect(useNavigation().navigate).toHaveBeenCalledWith(FinancialProductRoutes.FINANCIAL_PRODUCT_CREATE);
    });
  });
});
