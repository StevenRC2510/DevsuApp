import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { COLORS } from '@helpers/colors';

import { ButtonProps, ButtonStyles } from '@components/button/types';

import styles from '@components/button/styles';

function Button({
  text, isLoading, buttonStyle = ButtonStyles.PRIMARY, ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      style={[styles.container, styles[buttonStyle]]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.blue} />
      ) : (
        <Text style={[styles.text, styles[buttonStyle]]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
