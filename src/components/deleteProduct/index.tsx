import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from 'react-query';

import common from '@translations/index';
import { ButtonStyles } from '@components/button/types';
import { handleRedirection, notifyMessage } from '@utils/index';
import { useDeleteFinancialProduct } from '@services/financial';
import { useFinancialProductState } from '@context/financialProduct';
import { DeleteProductsProps } from '@components/deleteProduct/types';

import Button from '@components/button';

import styles from '@components/deleteProduct/styles';

function DeleteProduct({ onClose }: DeleteProductsProps) {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation();
  const { financialProduct } = useFinancialProductState();
  const { mutate } = useDeleteFinancialProduct();

  const handleOnDeleteProduct = () => mutate(
    { id: financialProduct.id },
    {
      onSuccess: () => {
        notifyMessage({
          msg: common.deleteSuccessful,
          title: 'Success',
          callback: () => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            handleRedirection(queryClient, navigate);
          },
        });
      },
      onError: () => {
        notifyMessage({
          msg: common.deleteErrorProduct,
          title: 'Error',
          callback: () => undefined,
        });
      },
    },
  );

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>{`${common.deleteProductQuestion} ${financialProduct.name}?`}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.centeredView}>
        <View style={styles.confirmBtn}>
          <Button text={common.confirm} onPress={handleOnDeleteProduct} buttonStyle={ButtonStyles.PRIMARY} />
        </View>
        <Button text={common.cancel} onPress={onClose} buttonStyle={ButtonStyles.SECONDARY} />
      </View>
    </View>
  );
}

export default DeleteProduct;
