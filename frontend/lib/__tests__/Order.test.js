import Order, { SINGLE_ORDER_QUERY } from '@components/Account/Content/Orders/Order';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import { fakeOrder } from '../testUtils';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import toJson from 'enzyme-to-json';

export const ThemeProviderWrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const mocks = [
  {
    request: { query: SINGLE_ORDER_QUERY, variables: { id: 'abc123' } },
    result: {
      data: {
        order: fakeOrder(),
      },
    },
  },
];

describe('<Order/>', () => {
  it('renders and displays information properly', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Order id="abc123" />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );

      await wait(0);
      wrapper.update();

      expect(toJson(wrapper.find('.totalVal')).children[0]).toContain('$400');
      expect(toJson(wrapper.find('.dateVal')).children[0]).toContain('7 days');
    });
  });

  it('matches snapshot', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Order id="abc123" />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );

      await wait(0);
      wrapper.update();

      expect(wrapper.find('[data-test="order"]')).toMatchSnapshot();
    });
  });
});
