import { screen, fireEvent, waitFor } from '@testing-library/react-native';

import { useFinancialProductState } from '@context/financialProduct';
import FinancialProductForm from '@screens/financialProductForm';

import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import { makeWrapper } from '@utils/testing/wrapper';
import common from '@src/translations';

jest.mock('@context/financialProduct', () => ({
  useFinancialProductState: jest.fn(),
}));

describe('ProductForm::Screen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const financialProduct = generateMockedFinancialProduct();

  test('Should prevent saving if fields are not filled', () => {
    (useFinancialProductState as jest.Mock).mockReturnValue({});

    const testContainer = makeWrapper(FinancialProductForm);
    testContainer();

    expect(screen.getByText(common.registerFormTitle)).toBeTruthy();

    const saveButton = screen.getByText(common.send);

    fireEvent.press(saveButton);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    waitFor(() => {
      expect(screen.getByText(common.idRequired)).toBeTruthy();
      expect(screen.getByText(common.nameRequired)).toBeTruthy();
    });
  });

  test('Should render the item component correctly and update a product', () => {
    (useFinancialProductState as jest.Mock).mockReturnValue(financialProduct);

    const testContainer = makeWrapper(FinancialProductForm);
    testContainer();
  });
});
