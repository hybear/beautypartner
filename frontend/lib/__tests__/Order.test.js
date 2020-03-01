import Order, { SINGLE_ORDER_QUERY } from '@components/Account/Content/Orders/Order';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import { fakeOrder } from '../testUtils';
import toJson from 'enzyme-to-json';
import { ThemeProviderWrapper } from '../../styles/theme';

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

      expect(toJson(wrapper.find('.totalVal')).children[1]).toContain('400.00');
      expect(toJson(wrapper.find('.cashbackVal')).children[1]).toBe('$4.23');
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
