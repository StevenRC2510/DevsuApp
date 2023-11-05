import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '@helpers/colors';
import { VariantStyles } from '@src/components/typography/types';

type StyledProps = Record<VariantStyles, TextStyle>;

const styles = StyleSheet.create<StyledProps>({
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 14,
  },
  normal: {
    color: COLORS.gray2,
    fontSize: 12,
    fontWeight: '500',
  },
  error: {
    color: COLORS.red,
    fontSize: 12,
  },
});

export default styles;
