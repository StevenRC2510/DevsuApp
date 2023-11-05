import React from 'react';
import { TextInput } from 'react-native';

import common from '@translations/index';
import useDebounce from '@hooks/useDebounce';
import { useGetVerificationFinancialProducts } from '@services/financial';

import Typography from '@components/typography';

import { InputFieldProps } from '@components/field//types';
import { VariantStyles } from '@components/typography/types';

import styles from '@components/field/styles';

function InputField<T>({
  label,
  name,
  value,
  error = '',
  touched = false,
  disabled = false,
  onChangeText,
  onBlur,
  onError,
}: InputFieldProps<T>) {
  const searchDebounce = useDebounce(value, 300);

  const { data } = useGetVerificationFinancialProducts(searchDebounce, {
    enabled: name === 'id' && !!searchDebounce && !disabled,
    onSuccess: (existId) => {
      if (existId) {
        onError('id', common.duplicatedError);
      }
    },
  });
  const inInvalidAsyncField = name === 'id' && data ? styles.errorInput : undefined;
  const insInvalidField = touched && error ? styles.errorInput : undefined;

  const errorTextInputStyle = inInvalidAsyncField || insInvalidField;
  const showErrorMessage = (touched && error) || inInvalidAsyncField;

  return (
    <>
      <Typography text={label} variant={VariantStyles.SUBTITLE} />
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        onBlur={() => onBlur(name)}
        value={value}
        editable={!disabled}
        style={[styles.normalInput, errorTextInputStyle]}
      />
      {showErrorMessage && <Typography text={error} variant={VariantStyles.ERROR} />}
    </>
  );
}

export default InputField;
