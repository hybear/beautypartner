import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PaginationStyles from './styles';
import { perPage } from '../../../config';
import Link from 'next/link';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return null;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page || 1;
      return (
        <PaginationStyles data-test="pagination">
          <Link
            // prefetch
            href={{ query: { page: page - 1 } }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              {' '}
              Prev{' '}
            </a>
          </Link>
          <p>
            Page {page} of <span data-test="totalPages">{pages}</span>
          </p>
          <p>{count} Products Total</p>
          <Link
            // prefetch
            href={{ query: { page: page + 1 } }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };
