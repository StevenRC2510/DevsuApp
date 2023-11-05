import React, { useState, useMemo } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import common from '@translations/index';
import useDebounce from '@hooks/useDebounce';
import { FinancialProductRoutes } from '@navigation/routes';
import { useGetFinancialProducts } from '@services/financial';

import Button from '@components/button';
import Search from '@components/search';
import ProductList from '@components/list';

import styles from '@screens/financialProductsList/styles';

function FinancialProductList() {
  const { navigate } = useNavigation();
  const { data, isLoading } = useGetFinancialProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const searchDebounce = useDebounce(searchTerm, 300);
  const list = useMemo(
    () => data?.filter((product) => product.name.toLowerCase().includes(searchDebounce.toLowerCase())) ?? [],
    [data, searchDebounce],
  );

  const getContent = () => {
    if (isLoading) {
      return (
        <View style={styles.emptyResultsContent} testID="productListLoading">
          <ActivityIndicator size="large" color="#0f265c" />
        </View>
      );
    }
    if (!list?.length) {
      return (
        <View style={styles.emptyResultsContent} testID="productListEmptyData">
          <Image
            style={styles.emptyResultsImage}
            source={{
              uri: 'https://i.pinimg.com/originals/7a/1c/f2/7a1cf2206c2a112f413888d20794c323.png',
            }}
          />
        </View>
      );
    }
    return (
      <View style={styles.list} testID="productList">
        <ProductList data={list} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Search value={searchTerm} onChangeText={setSearchTerm} />
      {getContent()}
      <Button
        testID="addButton"
        text={common.add}
        onPress={() => navigate(FinancialProductRoutes.FINANCIAL_PRODUCT_CREATE)}
      />
    </View>
  );
}

export default FinancialProductList;
