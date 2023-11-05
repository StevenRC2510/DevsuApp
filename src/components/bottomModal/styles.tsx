import { StyleSheet } from 'react-native';

import { COLORS } from '@helpers/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  closeBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  divider: {
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
});

export default styles;
