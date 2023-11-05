export interface InputFieldProps<T, K = keyof T extends string ? keyof T : never> {
  label: string;
  name: K;
  value: string;
  error?: string;
  disabled?: boolean;
  touched?: boolean;
  onChangeText: (value: string) => void;
  onBlur: (name: K) => void;
  onError: (name: string, message?: string) => void;
}
