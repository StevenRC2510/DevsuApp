import common from '@translations/index';
import { FinancialProduct } from '@services/financial/types';
import { FormValues, InputFields } from '@screens/financialProductForm/types';

export const INPUT_FIELDS: InputFields[] = [
  {
    label: common.id,
    name: 'id',
  },
  {
    label: common.name,
    name: 'name',
  },
  {
    label: common.description,
    name: 'description',
  },
  {
    label: common.logo,
    name: 'logo',
  },
  {
    label: common.dateRelease,
    name: 'releaseDate',
    type: 'date',
  },
  {
    label: common.dateRevision,
    name: 'revisionDate',
    type: 'date',
  },
];

export const DEFAULT_FORM_VALUES: FormValues = {
  id: '',
  name: '',
  description: '',
  logo: '',
  releaseDate: '',
  revisionDate: '',
};

export const initializeFormValues = (values: FinancialProduct) => ({
  id: values.id,
  name: values.name,
  description: values.description,
  logo: values.id,
  releaseDate: values.date_release.toString(),
  revisionDate: values.date_revision.toString(),
});
