import Orders, { ALL_ORDERS_QUERY } from '@components/Account/Content/Orders';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import { fakeOrder } from '../../lib/testUtils';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import toJson from 'enzyme-to-json';

export const ThemeProviderWrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const mocks = [
  {
    request: { query: ALL_ORDERS_QUERY },
    result: {
      data: {
        orders: [fakeOrder()],
      },
    },
  },
];

describe('<Order/>', () => {
  it('render orders and display one order', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Orders />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );

      await wait(0);
      wrapper.update();

      expect(toJson(wrapper.find('.orderList ul')).children.length).toBe(1);
      expect(toJson(wrapper.find('.orderList ul')).children[0].type).toBe('Order');
    });
  });

  it('matches snapshot', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Orders />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );

      await wait(0);
      wrapper.update();

      expect(wrapper.find('[data-test="orders"]')).toMatchSnapshot();
    });
  });
});
