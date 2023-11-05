import { StyleSheet, ViewStyle } from 'react-native';

type StyledProps = {
  container: ViewStyle;
  content: ViewStyle;
  field: ViewStyle;
  submitBtn: ViewStyle;
};

const styles = StyleSheet.create<StyledProps>({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  content: {
    flex: 1,
  },
  field: {
    paddingVertical: 4,
  },
  submitBtn: {
    marginBottom: 12,
  },
});

export default styles;
