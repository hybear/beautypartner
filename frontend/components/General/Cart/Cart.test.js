import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import Cart, { LOCAL_STATE_QUERY } from './index'
import { CURRENT_USER_QUERY } from '../../User'
import { fakeUser, fakeCartItem } from '../../../lib/testUtils';

const mocks = [
    {
        request: { query: CURRENT_USER_QUERY},
        result: {
            data: { me: {
                ...fakeUser(),
                cart: [fakeCartItem()]
            }}
        }
    },
    {
        request: { query: LOCAL_STATE_QUERY },
        result: { data: {cartOpen: true } }
    }
]

describe('<Cart/>', () => {
    it('renders and matches snapshot', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <Cart/>
            </MockedProvider>
        )
        await wait(0);
        wrapper.update();
        expect(wrapper.find('header')).toMatchSnapshot()
        expect(wrapper.find('CartItem')).toHaveLength(1);
    });
});
