import React from 'react';
import { Text } from 'react-native';
import { screen, fireEvent } from '@testing-library/react-native';

import BottomModal from '@components/bottomModal';
import { BottomModalProps } from '@components/bottomModal/types';
import { makeWrapper } from '@utils/testing/wrapper';

describe('BottomModal::Component', () => {
  test('Should render the component correctly and call onClose function', () => {
    const defaultProps: BottomModalProps = {
      open: true,
      onClose: jest.fn(),
      children: <Text>Testing</Text>,
    };

    const testContainer = makeWrapper(BottomModal, { defaultProps });
    testContainer();

    const modalComponent = screen.getByTestId('bottom-modal');
    expect(modalComponent).toBeDefined();
    const closeButton = screen.getByTestId('close-button');
    fireEvent.press(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
