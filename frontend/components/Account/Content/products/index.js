import { ProductList, Search } from '../../../General';
import { Title } from '../styles'; // Content

const Products = () => {
  return (
    <>
      <Title>Find Your Products</Title>
      <Search />
      <ProductList />
    </>
  );
};

export default Products;
