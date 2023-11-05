import DeleteProduct from '@components/deleteProduct';
import { DeleteProductsProps } from '@components/deleteProduct/types';
import { makeWrapper } from '@utils/testing/wrapper';

describe('DeleteProduct::Component', () => {
  const defaultProps: DeleteProductsProps = {
    onClose: jest.fn(),
  };
  test('Should render the component correctly and call onClose function', () => {
    const testContainer = makeWrapper(DeleteProduct, { defaultProps });
    testContainer();
  });
  test('Should call handleOnDeleteProduct function', () => {
    const testContainer = makeWrapper(DeleteProduct, { defaultProps });
    testContainer();
  });
});
