import React from 'react';
import { Text } from 'react-native';

import { TypographyProps, VariantStyles } from '@components/typography/types';

import styles from '@components/typography/styles';

function Typography({ text, variant = VariantStyles.NORMAL, ...rest }: TypographyProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Text {...rest} style={styles[variant]}>
      {text}
    </Text>
  );
}

export default Typography;
