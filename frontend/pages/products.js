import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Products from '@components/Account/Content/Products';
import Meta from '@components/Meta';

const ProductsPage = props => {
  return (
    <Middleware>
      <Meta title="Products" desc="Shop now products from O Boticario" />
      <Account active="products">
        <Products page={parseFloat(props.query.page) || 1} first={3} />
      </Account>
    </Middleware>
  );
};

export default ProductsPage;
