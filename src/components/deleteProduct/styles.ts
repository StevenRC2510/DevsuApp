import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '@helpers/colors';

type StyledProps = {
  container: ViewStyle;
  centeredView: ViewStyle;
  confirmBtn: ViewStyle;
  title: TextStyle;
  divider: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: 250,
    paddingBottom: 50,
  },
  centeredView: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.gray,
    marginTop: 32,
    marginBottom: 14,
  },
  confirmBtn: {
    marginBottom: 16,
  },
});

export default styles;
