import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import SignUp, { SIGNUP_MUTATION } from '../../components/SignUp';
import { CURRENT_USER_QUERY } from '../../components/User';
import { fakeUser } from '../testUtils';
import { act } from 'react-dom/test-utils';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router';
import { ThemeProviderWrapper } from '../../styles/theme';

Router.router = {
  push() {},
};

const me = fakeUser();
const mocks = [
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password: 'test22',
        document: '123456789',
      },
    },
    result: {
      data: {
        signup: {
          id: 'abc123',
          name: me.name,
          email: me.email,
          document: '123456789',
          avatar: '1',
          __typename: 'User',
        },
      },
    },
  },
  {
    request: {
      query: CURRENT_USER_QUERY,
    },
    result: { data: { me } },
  },
];

function type(wrapper, name, value) {
  wrapper.find(`input[name="${name}"]`).simulate('change', {
    target: { name, value },
  });
  // console.log(wrapper.find(`input[name="${name}"]`).debug())
}

describe('<SignUp />', () => {
  it('renders and matches snapshots', async () => {
    const wrapper = mount(
      <MockedProvider>
        <SignUp />
      </MockedProvider>,
      {
        wrappingComponent: ThemeProviderWrapper,
      }
    );
    await wait();
    wrapper.update();
    expect(wrapper.find('form')).toMatchSnapshot();
  });

  it('calls the mutation properly', async () => {
    await act(async () => {
      let apolloClient;
      const wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <ApolloConsumer>
            {client => {
              apolloClient = client;
              return <SignUp />;
            }}
          </ApolloConsumer>
        </MockedProvider>,
        {
          wrappingComponent: ThemeProviderWrapper,
        }
      );
      await wait();
      wrapper.update();

      type(wrapper, 'fullname', me.name);
      type(wrapper, 'email', me.email);
      type(wrapper, 'password', 'test22');
      type(wrapper, 'document', '123456789');

      wrapper.update();
      wrapper.find('form').simulate('submit');
      await wait();
      const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
      console.log(user);
    });
  });
});
