import { TouchableOpacityProps } from 'react-native';

export enum ButtonStyles {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  isLoading?: boolean;
  buttonStyle?: ButtonStyles;
}
