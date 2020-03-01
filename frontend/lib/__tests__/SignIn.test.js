import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import SignIn from '../../components/SignIn';
import { CURRENT_USER_QUERY } from '../../components/User';
import { fakeUser } from '../testUtils';
import { act } from 'react-dom/test-utils';
import { ThemeProviderWrapper } from '../../styles/theme';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } },
  },
];

describe('<SignIn/>', () => {
  it('renders the sign in page to logged out users', async () => {
    await act(async () => {
      const wrapper = mount(
        <MockedProvider mocks={notSignedInMocks}>
          <SignIn />
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      wrapper.update();
      await wait();
      const signin = wrapper.find('SignIn');
      expect(signin.exists()).toBe(true);
    });
  });
});
