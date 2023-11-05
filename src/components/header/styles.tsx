import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

import { COLORS } from '@helpers/colors';

type StyledProps = {
  container: ViewStyle;
  logo: ImageStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
});

export default styles;
