import React, { useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import User, { CURRENT_USER_QUERY } from '../User';
import Link from 'next/link';
import Router from 'next/router';
import InputMask from 'react-input-mask';

// UI
import { Input, Label, Info, Checkbox } from '../General/Form';
import { SignInContainer, BGImage, FormContainer, Form, Text, Logo, Error, Button } from './styles';

// ANIMATIONS
import Checked from '../General/Animations/Checked';

// ICONS

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!, $remember: Boolean!) {
    signin(email: $email, password: $password, remember: $remember) {
      id
      email
      name
    }
  }
`;

const SignIn = () => {
  const [User, setUser] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignInContainer>
      <BGImage src="/assets/signinbg-min.jpg" alt="Beauty Partner Makes" />
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={User}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        onCompleted={data => {
          Router.push({
            pathname: '/',
          });
        }}
      >
        {(signup, { error, loading }) => (
          <FormContainer>
            <Logo />
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                console.log(User);
                const res = await signup();
                console.log(res);
                setUser({ name: '', email: '', password: '' });
              }}
            >
              <div className="form__container">
                <div className="form__grid">
                  <Label htmlFor="email">E-mail*</Label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="Ex: lydia.hallie@email.com"
                    checked={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(User.email) && true}
                    value={User.email}
                    tabindex="2"
                    onChange={e => setUser({ ...User, email: e.target.value })}
                  />
                  {/^(?!$)+(?!\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/.test(User.email) && (
                    <Info>Check if your e-mail is valid</Info>
                  )}
                  {/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(User.email) && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )}
                </div>

                <div className="form__grid">
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    name="password"
                    id="password"
                    required
                    placeholder="*******"
                    value={User.password}
                    checked={
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(User.password) && true
                    }
                    tabindex="4"
                    type={showPassword ? 'text' : 'password'}
                    onChange={e => setUser({ ...User, password: e.target.value })}
                  />
                  <Info hidden={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(User.password)}>
                    <ul>
                      {/(?=.*[A-Z])/.test(User.password) ? '' : <li>Uppercase</li>}
                      {/(?=.*[a-z])/.test(User.password) ? '' : <li>Lowercase</li>}
                      {/(?=.*[0-9])/.test(User.password) ? '' : <li>Number</li>}
                      {/(?=.*[!@#\$%\^&\*])/.test(User.password) ? '' : <li>Special Char</li>}
                      {/(?=.{8,})/.test(User.password) ? '' : <li>Min 8 characters</li>}
                    </ul>
                  </Info>
                  {/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(User.password) && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )}
                </div>

                <div className="form__grid">
                  <Checkbox
                    name="remember"
                    id="remember"
                    defaultChecked={User.remember}
                    onChange={() => setUser({ ...User, remember: !User.remember })}
                  />
                  <Label htmlFor="remember">Remember Me</Label>
                </div>
              </div>
              <Button
                type="submit"
                primary
                fullWidth
                disabled={
                  loading ||
                  /^(?!$)+(?!\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/.test(User.email) ||
                  /^(?!.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))/.test(User.password)
                }
              >
                Sign{loading ? 'ing' : ''} In
              </Button>
              {error && (
                <Error>
                  {error.graphQLErrors.map(({ message }, i) => (
                    <p key={i}>{message}</p>
                  ))}
                </Error>
              )}
              <Text>
                Don't have an account?
                <Link href="/signup">
                  <a> Sign Up</a>
                </Link>
              </Text>
            </Form>
          </FormContainer>
        )}
      </Mutation>
    </SignInContainer>
  );
};

export default SignIn;
export { SIGNIN_MUTATION };
