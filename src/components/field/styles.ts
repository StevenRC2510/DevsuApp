import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '@helpers/colors';

type StyledProps = {
  normalInput: ViewStyle;
  errorInput: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  normalInput: {
    borderColor: COLORS.gray,
    borderWidth: 2,
    height: 40,
    borderRadius: 4,
    marginTop: 4,
    paddingHorizontal: 8,
  },
  errorInput: {
    borderColor: COLORS.red,
    borderWidth: 1,
  },
});

export default styles;
