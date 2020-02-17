import React, { useState } from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import { ApolloConsumer } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';

// Mutation
import { ADD_TO_CART_MUTATION } from '../CartAddItem';
import { CURRENT_USER_QUERY } from '../../User';
import { TOGGLE_CART_MUTATION } from '../Cart';

// UI
import { SearchContainer, Search, DropDown, DropDownItem } from './styles';
import { Label } from '../Form';

// Animation
import SpinLoad from '../Animations/SpinLoader';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
      id
      image
      title
    }
  }
`;

const AutoComplete = () => {
  const [ToggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const [AddToCart, { data, loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
    refetchQueries: [
      {
        query: CURRENT_USER_QUERY,
      },
    ],
    onCompleted: ToggleCart,
  });
  const [items, setItems] = useState([]);
  const [searchloading, setLoading] = useState(false);

  const onChange = debounce(async (e, client) => {
    console.log('searching...');
    setLoading(true);
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    setItems(res.data.items);
    setLoading(false);
    console.log(res);
  }, 350);

  // const routeToItem = (item) => {
  //     Router.push({
  //         pathname: `/p/${item.title.replace(/ /g, '-')}/${item.id}`
  //     })
  // }

  const Add = item => {
    AddToCart({ variables: { id: item.id } });
  };

  resetIdCounter();

  return (
    <SearchContainer>
      <Downshift onChange={Add} itemToString={item => (item === null ? '' : item.title)}>
        {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, clearSelection }) => (
          <div>
            <Label htmlFor="search">Type and choose a product to add to your cart</Label>
            <ApolloConsumer>
              {client => (
                <Search
                  {...getInputProps({
                    type: 'search',
                    placeholder: 'Ex: Malbec, Zaad, 100ml',
                    id: 'search',
                    className: searchloading && 'loading',
                    disabled: loading,
                    onChange: e => {
                      e.persist();
                      onChange(e, client);
                    },
                  })}
                />
              )}
            </ApolloConsumer>
            {isOpen && (
              <DropDown>
                {items.map((item, i) => (
                  <DropDownItem {...getItemProps({ item })} key={item.id} highlighted={i === highlightedIndex}>
                    <img width="50" src={item.image} alt={item.title} />
                    {item.title}
                  </DropDownItem>
                ))}
                {!items.length && !searchloading && <DropDownItem>Nothing was found {inputValue}</DropDownItem>}
              </DropDown>
            )}
            {loading && <SpinLoad isStoped={false} />}
          </div>
        )}
      </Downshift>
    </SearchContainer>
  );
};

export default AutoComplete;
