import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '@helpers/colors';
import { ButtonStyles } from '@components/button/types';

type AdditionalProps = {
  container: ViewStyle;
  text: TextStyle;
};

type StyledProps = Record<ButtonStyles, ViewStyle> & AdditionalProps;

const styles = StyleSheet.create<StyledProps>({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    elevation: 8,
    paddingVertical: 12,
    borderRadius: 4,
  },
  primary: {
    backgroundColor: COLORS.yellow,
    color: COLORS.blue,
  },
  secondary: {
    backgroundColor: COLORS.gray,
    color: COLORS.blue,
  },
  error: {
    backgroundColor: COLORS.red,
    color: COLORS.white,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default styles;
