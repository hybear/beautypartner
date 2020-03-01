import React from 'react';
import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Products from '@components/Account/Content/Products';
import Meta from '@components/Meta';
import PopUp from '@components/General/PopUp';

const ProductsPage = props => {
  return (
    <Middleware>
      <Meta title="Products" desc="Shop now products from O Boticario" />
      <PopUp />
      <Account active="products">
        <Products page={parseFloat(props.query.page) || 1} first={6} />
      </Account>
    </Middleware>
  );
};

export default ProductsPage;
