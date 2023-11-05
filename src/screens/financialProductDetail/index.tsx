import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { useFinancialProductState } from '@context/financialProduct';

import common from '@translations/index';
import { validateURL, emptyUrlLogo } from '@utils/index';
import { ButtonStyles } from '@components/button/types';
import { FinancialProductRoutes } from '@navigation/routes';
import { VariantStyles } from '@components/typography/types';

import Button from '@components/button';
import Typography from '@components/typography';
import BottomModal from '@components/bottomModal';
import DeleteProduct from '@components/deleteProduct';

import styles from '@screens/financialProductDetail/styles';

function FinancialProductDetail() {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const { financialProduct } = useFinancialProductState();
  const { navigate } = useNavigation();
  const parseReleaseDate = format(new Date(financialProduct.date_release), 'dd-MM-yyyy');
  const parseRevisionDate = format(new Date(financialProduct.date_revision), 'dd-MM-yyyy');

  return (
    <View style={styles.container}>
      <Typography text={`${common.id}: ${financialProduct.id}`} variant={VariantStyles.TITLE} />
      <Typography text={common.extraInfo} />
      <View style={styles.detail}>
        <View style={styles.row}>
          <Typography text={common.name} />
          <Typography text={financialProduct.name} variant={VariantStyles.SUBTITLE} />
        </View>
        <View style={styles.row}>
          <Typography text={common.description} />
          <Typography text={financialProduct.description} variant={VariantStyles.SUBTITLE} />
        </View>
        <View style={styles.rowImage}>
          <Typography text={common.logo} />
          <Image
            style={styles.image}
            source={{
              uri: validateURL(financialProduct.logo) ? financialProduct.logo : emptyUrlLogo,
            }}
          />
        </View>
        <View style={styles.row}>
          <Typography text={common.dateRelease} />
          <Typography text={parseReleaseDate} variant={VariantStyles.SUBTITLE} />
        </View>
        <View style={styles.row}>
          <Typography text={common.dateRevision} />
          <Typography text={parseRevisionDate} variant={VariantStyles.SUBTITLE} />
        </View>
      </View>
      <View>
        <View style={styles.editBtn}>
          <Button
            text={common.edit}
            buttonStyle={ButtonStyles.SECONDARY}
            onPress={() => navigate(FinancialProductRoutes.FINANCIAL_PRODUCT_CREATE, {
              isEdit: true,
            })}
          />
        </View>
        <Button text={common.delete} buttonStyle={ButtonStyles.ERROR} onPress={() => setOpenDeleteModal(true)} />
      </View>
      <BottomModal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <DeleteProduct onClose={() => setOpenDeleteModal(false)} />
      </BottomModal>
    </View>
  );
}

export default FinancialProductDetail;
