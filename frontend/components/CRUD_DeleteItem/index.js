import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_PRODUCTS_QUERY } from '../General/ProductList';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_PRODUCTS_QUERY });
    console.log(data);

    data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);

    cache.writeQuery({ query: ALL_PRODUCTS_QUERY, data });
  };
  render() {
    return (
      <Mutation mutation={DELETE_PRODUCT_MUTATION} variables={{ id: this.props.id }} update={this.update}>
        {(deleteItem, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteItem().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
