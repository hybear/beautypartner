import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
import { LOCAL_STATE_QUERY as CART_STATE_QUERY } from '../components/General/Cart';
import { LOCAL_STATE_QUERY as POPUP_STATE_QUERY } from '../components/General/PopUp';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, { cache }) {
            const { cartOpen } = cache.readQuery({
              query: CART_STATE_QUERY,
            });
            const data = {
              data: { cartOpen: !cartOpen },
            };
            cache.writeData(data);
            return data;
          },
          togglePopUp(_, variables, { cache }) {
            const { popUp } = cache.readQuery({
              query: POPUP_STATE_QUERY,
            });
            console.log(popUp);
            const data = {
              data: { popUp: !popUp },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
        popUp: true,
      },
    },
  });
}

export default withApollo(createClient);
