import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { ApolloConsumer } from 'react-apollo'
import { act } from 'react-dom/test-utils';
import RemoveFromCart, { REMOVE_FROM_CART_MUTATION } from './index'
import { CURRENT_USER_QUERY } from '../../../User'
import { fakeUser, fakeCartItem } from '../../../../lib/testUtils';

global.alert = console.log;

const mocks = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: { data: { me: {
                ...fakeUser(),
                cart: [fakeCartItem({ id: 'abc123' })],
                }
            }
        }
    },
    {
        request: { query: REMOVE_FROM_CART_MUTATION, variables: { id: 'abc123' }},
        result: { data: {
                removeFromCart: {
                    __typename: 'CartItem',
                    id: 'abc123'
                }
            }
        }
    }
]

describe('<RemoveFromCart/>', () => {
    it('renders and matches snapshots', async () => {
        await act(async () => {
            const wrapper = mount(
                <MockedProvider mocks={mocks}>
                    <RemoveFromCart id="abc123" />
                </MockedProvider>
            )
            expect(wrapper.find('button[data-test="btnRemoveFromCart"]')).toMatchSnapshot();
        });
    });
    it('removes the item from cart', async () => {
        await act(async () => {
            let apolloClient;
            const wrapper = mount(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <ApolloConsumer>
                        {
                            client => {
                                apolloClient = client;
                                return <RemoveFromCart id="abc123" />
                            }
                        }
                    </ApolloConsumer>
                </MockedProvider>
            );
            await wait();
            wrapper.update();

            const res = await apolloClient.query({ query: CURRENT_USER_QUERY })
            expect(res.data.me.cart).toHaveLength(1);
            expect(res.data.me.cart[0].item.bestPrice).toBe(155200);
            wrapper.find('button[data-test="btnRemoveFromCart"]').simulate('click');
            await wait();
            const res2 = await apolloClient.query({ query: CURRENT_USER_QUERY })
            expect(res2.data.me.cart).toHaveLength(0);
        });
    });
});
