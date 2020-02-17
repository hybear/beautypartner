import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Products from '@components/Account/Content/Products';
import Meta from '@components/Meta';

function ProductsPage() {
  return (
    <Middleware>
      <Meta title="Products" desc="Shop now products from O Boticario" />
      <Account active="products">
        <Products />
      </Account>
    </Middleware>
  );
}

export default ProductsPage;
