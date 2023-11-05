import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

type StyledProps = {
  container: ViewStyle;
  list: ViewStyle;
  emptyResultsContent: ViewStyle;
  emptyResultsImage: ImageStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 42,
  },
  emptyResultsContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyResultsImage: {
    width: 300,
    height: 300,
  },
  list: {
    flex: 1,
    marginVertical: 30,
  },
});

export default styles;
