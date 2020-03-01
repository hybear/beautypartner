import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { act } from 'react-dom/test-utils';
import Pagination, { PAGINATION_QUERY } from '../../components/General/Pagination';
import Router from 'next/router';
import { ThemeProviderWrapper } from '../../styles/theme';

Router.router = {
  push() {},
};

function makeMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY },
      result: {
        data: {
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              __typename: 'count',
              count: length,
            },
          },
        },
      },
    },
  ];
}

describe('<Pagination/>', () => {
  it('renders pagination for 20 items', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={makeMocksFor(20)}>
          <Pagination page={1} />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      await wait();
      wrapper.update();

      const totalPages = wrapper.find('[data-test="totalPages"]');
      expect(totalPages.text()).toEqual('4');
      expect(totalPages).toMatchSnapshot();
    });
  });

  it('disables prev button on first page', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={makeMocksFor(20)}>
          <Pagination page={1} />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      await wait();
      wrapper.update();

      expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(true);
      expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
    });
  });

  it('disables next button on last page', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={makeMocksFor(20)}>
          <Pagination page={5} />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      await wait();
      wrapper.update();

      expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
      expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(true);
    });
  });

  it('enables all button on middle page', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={makeMocksFor(20)}>
          <Pagination page={3} />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      await wait();
      wrapper.update();

      expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
      expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
    });
  });
});
