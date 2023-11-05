import { TextInputProps } from 'react-native';

export enum VariantStyles {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  NORMAL = 'normal',
  ERROR = 'error',
}

export interface TypographyProps extends TextInputProps {
  text: string;
  variant?: VariantStyles;
}
