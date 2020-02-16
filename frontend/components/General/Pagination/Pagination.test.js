import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import Pagination, { PAGINATION_QUERY } from './index'
import Router from 'next/router';

Router.router = {
    push() {},
}

function makeMocksFor(length){
    return  [
        {
            request: { query: PAGINATION_QUERY },
            result: {
                data: {
                    itemsConnection: {
                        __typename: 'aggregate',
                        aggregate: {
                            __typename: 'count',
                            count: length
                        }
                    }
                }
            }
        }
    ]
}

describe('<Pagination/>', () => {
    it('displays a loading message', () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(1)}>
                <Pagination page={1} />
            </MockedProvider>
        )
        expect(wrapper.text()).toContain('Loading...');
        // expect(pagination).toMatchSnapshot();
        // console.log(wrapper.debug());
    })
    
    it('renders pagination for 20 items', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(20)}>
                <Pagination page={1} />
            </MockedProvider>
        )
        await wait();
        wrapper.update();
        
        const totalPages = wrapper.find('[data-test="totalPages"]');
        expect(totalPages.text()).toEqual('5')
        expect(totalPages).toMatchSnapshot();
    });

    it('disables prev button on first page', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(20)}>
                <Pagination page={1} />
            </MockedProvider>
        )
        await wait();
        wrapper.update();

        expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(true);
        expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
    })

    it('disables next button on last page', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(20)}>
                <Pagination page={5} />
            </MockedProvider>
        )
        await wait();
        wrapper.update();

        expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
        expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(true);
    })

    it('enables all button on middle page', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(20)}>
                <Pagination page={3} />
            </MockedProvider>
        )
        await wait();
        wrapper.update();

        expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
        expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
    })
})