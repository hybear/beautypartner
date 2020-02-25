import { ProductList, Search } from '../../../General';
import { Title } from '../styles'; // Content

const Products = props => {
  return (
    <>
      <Title>Find Your Products</Title>
      <Search />
      <ProductList {...props} />
    </>
  );
};

export default Products;
