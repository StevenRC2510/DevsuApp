import { screen } from '@testing-library/react-native';

import List from '@components/list';

import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import { ProductListProps } from '@components/list/types';
import { makeWrapper } from '@utils/testing/wrapper';

describe('List::Component', () => {
  test('Should render the list component correctly', () => {
    const defaultProps: ProductListProps = {
      data: [generateMockedFinancialProduct()],
    };

    const testContainer = makeWrapper(List, { defaultProps });
    testContainer();

    const listComponent = screen.getByTestId('financialProductList');
    const itemListComponent = screen.getByTestId(`item-${defaultProps.data[0].id}`);

    expect(listComponent).toBeDefined();
    expect(itemListComponent).toBeDefined();
  });
});
