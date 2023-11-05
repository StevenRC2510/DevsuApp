import * as yup from 'yup';

import common from '@translations/index';

// eslint-disable-next-line import/prefer-default-export
export const validationSchema = yup.object().shape({
  id: yup.string().required(common.idRequired),
  name: yup.string().required(common.nameRequired),
  description: yup.string().required(common.descriptionRequired),
  logo: yup.string().required(common.logoRequired),
  releaseDate: yup.string().required(common.releaseDateRequired),
  revisionDate: yup.string().required(common.revisionDateRequired),
});
