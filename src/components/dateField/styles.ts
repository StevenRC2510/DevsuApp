import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '@helpers/colors';

type StyledProps = {
  normalDateInput: ViewStyle;
  errorDateInput: ViewStyle;
  datePicker: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  normalDateInput: {
    borderColor: COLORS.gray,
    borderWidth: 2,
    height: 40,
    borderRadius: 4,
    marginTop: 4,
    paddingHorizontal: 8,
  },
  errorDateInput: {
    borderColor: COLORS.red,
    borderWidth: 1,
  },
  datePicker: {
    width: '100%',
  },
});

export default styles;
