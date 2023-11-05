import React from 'react';
import { View, Image } from 'react-native';

import environment from '@utils/environment';

import styles from '@components/header/styles';

function Header() {
  const {
    appsUrl: { logoUrl },
  } = environment;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: logoUrl,
        }}
      />
    </View>
  );
}

export default Header;
