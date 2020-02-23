import Order, { SINGLE_ORDER_QUERY } from '@components/Account/Content/Orders/Order/index';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import { fakeOrder } from '../../lib/testUtils';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const ThemeProviderWrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

describe('<Order/>', () => {
  it('renders and displays information properly', async () => {
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

      expect(wrapper.find('[data-test="order"]')).toBeDefined();
      expect(wrapper).toMatchSnapshot();
      // expect(wrapper.find('.totalVal')).toBe('$400');
    });
  });
  // it('renders and displays Image properly', ()=>{
  //     const wrapper = shallow(<Order id={fakeItem} />);
  //     const img = wrapper.find('styles__Image')
  //     expect(img.props().src).toBe(fakeItem.image);
  // })
});

// describe('<Order/>', () => {
//     it('renders and matches the snapshot', () => {
//         const wrapper = shallow(<Order id={fakeOrderItem} />);
//         expect(wrapper).toMatchSnapshot();
//     })
// })
