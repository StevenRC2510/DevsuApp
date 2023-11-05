import { PropsWithChildren } from 'react';

export interface BottomModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}
