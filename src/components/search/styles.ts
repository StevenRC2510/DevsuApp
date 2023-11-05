import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '@helpers/colors';

type StyledProps = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: COLORS.gray,
    borderRadius: 4,
  },
});

export default styles;
