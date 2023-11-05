import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
// import { Colors } from '@helpers/colors';

type StyledProps = {
  container: ViewStyle;
  detail: ViewStyle;
  row: ViewStyle;
  rowImage: ViewStyle;
  image: ImageStyle;
  editBtn: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  detail: {
    marginTop: 60,
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rowImage: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 130,
    height: 130,
    objectFit: 'contain',
    marginLeft: '20%',
  },
  editBtn: {
    marginBottom: 8,
  },
});

export default styles;
