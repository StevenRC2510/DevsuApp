import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import callbackApi from '@context/callbackApi/callback';
import { CallbackApiProvider, useCallbackApi } from '@context/callbackApi';

jest.mock('@context/callbackApi/callback');
const MockedCallbackApi = callbackApi as unknown as jest.Mock<Promise<unknown>>;

describe('CallbackApi', () => {
  function CustomComponent() {
    const { callbackApi: callbackApiMock } = useCallbackApi();
    const handleOnPress = () => {
      if (callbackApiMock) {
        callbackApiMock('/');
      }
    };
    return (
      <View>
        <TouchableOpacity testID="buttonTest" onPress={handleOnPress}>
          <Text>Test Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
  it('Default callback', () => {
    const { getByTestId } = render(
      <CallbackApiProvider>
        <CustomComponent />
      </CallbackApiProvider>,
    );
    fireEvent.press(getByTestId('buttonTest'));
    expect(MockedCallbackApi).toHaveBeenCalledWith('/');
  });
});
