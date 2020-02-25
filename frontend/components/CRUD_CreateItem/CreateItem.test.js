import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import CreateItem, { CREATE_PRODUCT_MUTATION } from './index'
import Router from 'next/router'
import { fakeItem } from '../../lib/testUtils'

const senjuImage = 'https://izanami.com/senju.jpg'

global.fetch = jest.fn().mockResolvedValue({
    json: () => ({
        secure_url: senjuImage,
        eager: [{secure_url: senjuImage }]
    })
})

describe('<CreateItem />', () => {
    it('renders and matches snapshots', () => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem />
            </MockedProvider>
        );

        const form = wrapper.find('[data-test="form"]');
        expect(form).toMatchSnapshot();
    })

    it('uploads a file when change', async () => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem />
            </MockedProvider>
        );

        const input = wrapper.find('input[type="file"]');
        input.simulate('change', { target: { files: ['fakeparfum.jpg'] } })
        await wait();

        const component = wrapper.find('CreateItem').instance();
        expect(component.state.image).toEqual(senjuImage);
        expect(component.state.largeImage).toEqual(senjuImage);
        expect(global.fetch).toHaveBeenCalled();
        global.fetch.mockReset();
    });

    it('handles state updating', async () => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem />
            </MockedProvider>
        );

        wrapper
            .find('input#title')
            .simulate('change', { target: { value: 'Senju', name: 'title'} })
        wrapper
            .find('input#price')
            .simulate('change', { target: { value: 50000, name: 'price', type: 'number'} })
        wrapper
            .find('textarea#description')
            .simulate('change', { target: { value: 'Senju is made for you', name: 'description'} })
        
        expect(wrapper.find('CreateItem').instance().state).toMatchObject({
            title: 'Senju',
            price: 50000,
            description: 'Senju is made for you'
        })
    });
});