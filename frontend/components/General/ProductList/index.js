import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Product from '../CardProduct';
import Pagination from '../Pagination';
import { Me } from '../../Middleware';
import { perPage } from '../../../config';
import { ItemsList } from './styles';

// ANIMATIONS
import Loading from '../Animations/ContentLoading';

const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
        items(first: $first, skip: $skip, orderBy: createdAt_DESC){
            id
            title
            description
            category
            bestPrice
            listPrice
            image
            largeImage
            reference
        }
    }
`;

const Products = props => {
  const { info } = useContext(Me);
  console.log(props.page);
  return (
    <React.Fragment>
      <Pagination page={props.page} first={props.first} />
      <Query
        query={ALL_PRODUCTS_QUERY}
        variables={{
          skip: props.page * perPage - perPage,
          first: props.first,
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <Loading isStoped={false} />;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <ItemsList>
              {data.items.map((item, i) => (
                <Product item={item} key={i} user={info} />
              ))}
            </ItemsList>
          );
        }}
      </Query>
      <Pagination page={props.page} />
    </React.Fragment>
  );
};

export default Products;
export { ALL_PRODUCTS_QUERY };
