import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

import { capitalizeText } from '@utils/index';
import { FinancialProductRoutes } from '@navigation/routes';
import { useFinancialProductState } from '@context/financialProduct';

import Typography from '@components/typography';
import { VariantStyles } from '@components/typography/types';
import { ItemProps } from '@components/list/components/item/types';

import styles from '@components/list/styles';

function Item(financialProduct: ItemProps) {
  const { updateProduct } = useFinancialProductState();
  const { navigate } = useNavigation();
  const onProductDetail = () => {
    updateProduct(financialProduct);
    navigate(FinancialProductRoutes.FINANCIAL_PRODUCT_DETAIL);
  };

  const { name, id, isLastItem } = financialProduct;

  const borderBottomStyle = !isLastItem && styles.borderBottom;

  return (
    <TouchableOpacity testID={`item-${id}`} style={[styles.itemContainer, borderBottomStyle]} onPress={onProductDetail}>
      <View>
        <Typography text={capitalizeText(name)} variant={VariantStyles.SUBTITLE} />
        <Typography text={`ID: ${id}`} />
      </View>
      <FontAwesomeIcon icon={faChevronRight} />
    </TouchableOpacity>
  );
}

export default Item;
