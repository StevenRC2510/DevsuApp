import { screen } from '@testing-library/react-native';

import Item from '@components/list/components/item';

import { capitalizeText } from '@utils/index';
import { generateMockedFinancialProduct } from '@utils/testing/mocks';
import { ItemProps } from '@components/list/components/item/types';
import { makeWrapper } from '@utils/testing/wrapper';

describe('Item::Component', () => {
  test('Should render the item component correctly', () => {
    const defaultProps: ItemProps = { ...generateMockedFinancialProduct(), isLastItem: false };

    const testContainer = makeWrapper(Item, { defaultProps });
    testContainer();

    const itemTitleComponent = screen.getByText(capitalizeText(defaultProps.name));
    const itemDescriptionComponent = screen.getByText(`ID: ${defaultProps.id}`);

    expect(itemTitleComponent).toBeDefined();
    expect(itemDescriptionComponent).toBeDefined();
  });
});
