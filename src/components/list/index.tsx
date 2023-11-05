import React from 'react';
import { FlatList, View } from 'react-native';

import Item from '@components/list/components/item';

import { ProductListProps } from '@components/list/types';

import styles from '@components/list/styles';

function ProductList({ data }: ProductListProps) {
  return (
    <View style={styles.container} testID="financialProductList">
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const isLastItem = index === data.length - 1;

          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Item {...{ ...item, isLastItem }} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ProductList;
