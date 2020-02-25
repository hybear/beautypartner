import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import RequestReset, { REQUEST_RESET_MUTATION } from './index'

const mocks = [
    {
        request: {
            query: REQUEST_RESET_MUTATION,
            variables: { email: 'patrick@hybear.com' },
        },
        result:{
            data: { requestReset: { message: 'success', __typename: 'Message' } }
        }
    }
];

describe('<Requestreset/>', () => {
    it('calls the mutation', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <RequestReset />
            </MockedProvider>
        );

        wrapper
            .find('input')
            .simulate('change', { target: { name: 'email', value: 'patrick@hybear.com' } })
        wrapper.find('[data-test="form"]').simulate('submit');

        await wait();
        wrapper.update();

        expect(wrapper.find('p').text()).toContain('Success! We send to your e-mail the next steps');
    })
})