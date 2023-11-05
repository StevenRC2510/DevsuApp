/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useQueryClient } from 'react-query';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '@components/button';
import InputField from '@components/field';
import DateField from '@components/dateField';
import Typography from '@components/typography';

import common from '@translations/index';
import { DEFAULT_FORM_VALUES, initializeFormValues, INPUT_FIELDS } from '@screens/financialProductForm/constants';

import { ButtonStyles } from '@components/button/types';
import { VariantStyles } from '@components/typography/types';
import { handleRedirection, notifyMessage } from '@utils/index';
import { FormValues } from '@screens/financialProductForm/types';
import { FinancialProductFormRouteProp } from '@navigation/routes';
import { useFinancialProductState } from '@context/financialProduct';
import { validationSchema } from '@screens/financialProductForm/formConfig';
import { generateDuplicatedMessageError } from '@screens/financialProductForm/utils';
import { useCreateFinancialProduct, useUpdateFinancialProduct } from '@services/financial';

import styles from '@screens/financialProductForm/styles';

function FinancialProductForm() {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation();
  const { params } = useRoute<FinancialProductFormRouteProp>();
  const { financialProduct } = useFinancialProductState();

  const {
    mutate: createProduct,
    isLoading: isLoadingCreate,
    isSuccess: isSuccessCreate,
    isError: isErrorCreate,
  } = useCreateFinancialProduct({
    onSuccess: () => {
      notifyMessage({
        msg: common.productCreated,
        title: 'Success',
        callback: () => {
          handleRedirection(queryClient, navigate);
        },
      });
    },
    onError: ({ data }) => generateDuplicatedMessageError(data, common.productCreatedError),
  });

  const {
    mutate: updateProduct,
    isLoading: isLoadingUpdate,
    isError: isErrorUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateFinancialProduct({
    onSuccess: () => {
      notifyMessage({
        msg: common.productUpdateSuccessful,
        title: 'Success',
        callback: () => {
          handleRedirection(queryClient, navigate);
        },
      });
    },
    onError: ({ data }) => generateDuplicatedMessageError(data, common.productUpdateError),
  });

  const isEditMode = !!params?.isEdit;

  const initalValues = isEditMode ? initializeFormValues(financialProduct) : DEFAULT_FORM_VALUES;
  const disabledSubmitBtn =
    (isLoadingCreate && (!isSuccessCreate || !isErrorCreate)) ||
    (isLoadingUpdate && (!isSuccessUpdate || !isErrorUpdate));

  const onSubmit = (values: FormValues) => {
    const data = {
      id: values.id,
      name: values.name,
      description: values.description,
      logo: values.logo,
      date_release: values.releaseDate,
      date_revision: values.revisionDate,
    };
    return isEditMode ? updateProduct(data) : createProduct(data);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initalValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm, setFieldError }) => (
          <>
            <View style={styles.content}>
              <Typography text={common.registerFormTitle} variant={VariantStyles.TITLE} />
              {INPUT_FIELDS.map((field) => (
                <View key={field.name} style={styles.field}>
                  {field.type === 'date' ? (
                    <DateField
                      label={field.label}
                      value={values[field.name]}
                      error={errors[field.name]}
                      handleChange={handleChange(field.name)}
                    />
                  ) : (
                    <InputField
                      label={field.label}
                      name={field.name}
                      disabled={isEditMode && field.name === 'id'}
                      value={values[field.name]}
                      error={errors[field.name]}
                      touched={touched[field.name]}
                      onChangeText={handleChange(field.name)}
                      onError={setFieldError}
                      onBlur={handleBlur}
                    />
                  )}
                </View>
              ))}
            </View>
            <View style={styles.submitBtn}>
              <Button
                text={common.send}
                isLoading={isLoadingCreate}
                disabled={disabledSubmitBtn}
                onPress={() => handleSubmit()}
                buttonStyle={ButtonStyles.PRIMARY}
              />
            </View>
            <Button
              text={common.reset}
              onPress={() => resetForm()}
              buttonStyle={ButtonStyles.SECONDARY}
              disabled={isLoadingCreate}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

export default FinancialProductForm;
