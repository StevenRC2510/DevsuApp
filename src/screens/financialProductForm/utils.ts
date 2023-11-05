import common from '@translations/index';
import { notifyMessage } from '@utils/index';

// eslint-disable-next-line import/prefer-default-export
export const generateDuplicatedMessageError = (response: string, customMessage: string) => {
  const { duplicatedError } = common;
  const isDuplicated = duplicatedError === response;
  const error = isDuplicated ? common.changeIdError : customMessage;

  notifyMessage({ msg: error, title: 'Error', callback: () => undefined });
};
