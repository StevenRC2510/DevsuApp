import { QueryClient } from 'react-query';
import { ToastAndroid, Platform, Alert } from 'react-native';

import { FinancialProductRoutes } from '@navigation/routes';
import { QueriesKeyConstants } from '@services/financial/constants';

export function capitalizeText(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

type NotifyMessageProps = {
  msg: string;
  title: string;
  callback: () => void;
};

export function notifyMessage({ msg, title, callback }: NotifyMessageProps) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(title, msg, [
      {
        text: 'OK',
        onPress: callback,
      },
    ]);
  }
}

export async function handleRedirection(queryClient: QueryClient, navigate: (route: string) => void) {
  await queryClient.invalidateQueries({
    queryKey: [QueriesKeyConstants.GET_PRODUCTS_KEY],
  });
  navigate(FinancialProductRoutes.FINANCIAL_PRODUCT_LIST);
}

export function validateURL(url: string) {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

  return urlPattern.test(url);
}

export const emptyUrlLogo = 'https://cdn.pixabay.com/photo/2017/09/18/08/56/credit-card-2761073_1280.png';
