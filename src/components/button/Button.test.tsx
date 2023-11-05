import { screen, fireEvent } from '@testing-library/react-native';

import Button from '@components/button';
import { ButtonProps } from '@components/button/types';
import { makeWrapper } from '@utils/testing/wrapper';

describe('Button::Component', () => {
  test('Should render the component correctly and call onPress function', () => {
    const defaultProps: ButtonProps = {
      text: 'testing',
      onPress: jest.fn(),
    };

    const testContainer = makeWrapper(Button, { defaultProps });
    testContainer();

    const buttonComponent = screen.getByText(defaultProps.text);

    expect(buttonComponent).toBeDefined();

    fireEvent.press(buttonComponent);

    expect(defaultProps.onPress).toHaveBeenCalled();
  });
});
