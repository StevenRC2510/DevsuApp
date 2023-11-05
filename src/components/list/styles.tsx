import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '@helpers/colors';

type StyledProps = {
  container: ViewStyle;
  itemContainer: ViewStyle;
  itemNameText: TextStyle;
  itemIdText: TextStyle;
  borderBottom: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
  },
  itemNameText: {
    fontWeight: 'bold',
  },
  itemIdText: {
    marginTop: 4,
  },
});

export default styles;
