import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import AddToCart, { ADD_TO_CART_MUTATION } from '../../components/General/CartAddItem';
import { CURRENT_USER_QUERY } from '../../components/User';
import { fakeUser, fakeCartItem } from '../testUtils';
import { ThemeProviderWrapper } from '../../styles/theme';

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [],
        },
      },
    },
  },
  {
    request: { query: ADD_TO_CART_MUTATION, variables: { id: 'abc123' } },
    result: {
      data: {
        addToCart: {
          ...fakeCartItem(),
          quantity: 1,
        },
      },
    },
  },
];

describe('<AddToCart/>', () => {
  it('renders and matches the snapshot', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <AddToCart id="abc123" />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      await wait(0);
      wrapper.update();
      expect(wrapper.find('[data-test="btnAddtoCart"]')).toMatchSnapshot();
    });
  });

  it('changes from add to adding when clicked', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <AddToCart id="abc123" />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );

      await wait();
      wrapper.update();
      expect(wrapper.text()).toContain('Add To Cart');
      wrapper.find('button[data-test="btnAddtoCart"]').simulate('click');
      expect(wrapper.text()).toContain('Adding To Cart');
    });
  });
});
