import { TextInputProps } from 'react-native';
import { screen, fireEvent } from '@testing-library/react-native';

import common from '@translations/index';

import Search from '@components/search';
import { makeWrapper } from '@utils/testing/wrapper';

describe('Search::Component', () => {
  test('Should render the component correctly and call onChangeText function', () => {
    const defaultProps: TextInputProps = {
      value: 'testing',
      onChangeText: jest.fn(),
    };

    const testContainer = makeWrapper(Search, { defaultProps });
    testContainer();

    const searchComponent = screen.getByPlaceholderText(common.search);

    expect(searchComponent).toBeDefined();

    fireEvent.changeText(searchComponent, 'value');

    expect(defaultProps.onChangeText).toHaveBeenCalledWith('value');
  });
});
