import { faker } from '@faker-js/faker';

import { FinancialProduct } from '@services/financial/types';

// eslint-disable-next-line import/prefer-default-export
export const generateMockedFinancialProduct = (): FinancialProduct => ({
  id: faker.number.int().toString(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  logo: faker.image.url(),
  date_release: faker.date.anytime(),
  date_revision: faker.date.anytime(),
});
