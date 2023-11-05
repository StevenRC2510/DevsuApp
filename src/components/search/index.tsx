import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import common from '@translations/index';

import styles from '@components/search/styles';

function Search({ value, onChangeText, ...rest }: TextInputProps) {
  return (
    <TextInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      style={styles.container}
      onChangeText={onChangeText}
      placeholder={common.search}
      value={value}
    />
  );
}

export default Search;
