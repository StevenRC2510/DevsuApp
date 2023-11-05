import { screen } from '@testing-library/react-native';
import { format } from 'date-fns';

import { useFinancialProductState } from '@context/financialProduct';
import FinancialProductDetail from '@screens/financialProductDetail';

import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import { makeWrapper } from '@utils/testing/wrapper';

jest.mock('@context/financialProduct', () => ({
  useFinancialProductState: jest.fn(),
}));

describe('ProductDetail::Screen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const financialProduct = generateMockedFinancialProduct();
  (useFinancialProductState as jest.Mock).mockReturnValue({ financialProduct });

  test('Should render the item component correctly', () => {
    const testContainer = makeWrapper(FinancialProductDetail);
    testContainer();

    const fields = [
      `ID: ${financialProduct.id}`,
      financialProduct.name,
      financialProduct.description,
      format(financialProduct.date_release, 'dd-MM-yyyy'),
      format(financialProduct.date_revision, 'dd-MM-yyyy'),
    ];

    fields.forEach((field) => expect(screen.getByText(field)).toBeDefined());
  });
});
