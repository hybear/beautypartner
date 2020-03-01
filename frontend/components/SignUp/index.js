import React, { useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import User, { CURRENT_USER_QUERY } from '../User';
import Link from 'next/link';
import Router from 'next/router';
import InputMask from 'react-input-mask';

// UI
import { Input, Label, Info } from '../General/Form';
import { FormContainer, Form, Button, Text, Logo } from './styles';

// ANIMATIONS
import Checked from '../General/Animations/Checked';

// ICONS

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($name: String!, $document: String!, $email: String!, $password: String!) {
    signup(name: $name, document: $document, email: $email, password: $password) {
      id
      name
      email
      document
    }
  }
`;

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    document: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={newUser}
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
                console.log(newUser);
                const res = await signup();
                console.log(res);
                setNewUser({ name: '', email: '', password: '' });
              }}
            >
              <div className="form__container">
                <div className="form__grid">
                  <Label htmlFor="fullname">Full Name*</Label>
                  <Input
                    name="fullname"
                    id="fullname"
                    type="text"
                    required
                    placeholder="Ex: Lydia Hallie"
                    value={newUser.name}
                    tabindex="1"
                    checked={/(\w.+\s).+/.test(newUser.name) && true}
                    onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                  />
                  {/^\w+$/.test(newUser.name) && <Info>Please check if you type your full name</Info>}
                  {/(\w.+\s).+/.test(newUser.name) && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )}
                </div>

                <div className="form__grid">
                  <Label htmlFor="email">E-mail*</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="Ex: lydia.hallie@email.com"
                    checked={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newUser.email) && true}
                    value={newUser.email}
                    tabindex="2"
                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                  />
                  {/^(?!$)+(?!\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/.test(newUser.email) && (
                    <Info>Check if your e-mail is valid</Info>
                  )}
                  {/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newUser.email) && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )}
                </div>

                <div className="form__grid">
                  <Label htmlFor="document">CPF*</Label>
                  <InputMask
                    mask="999.999.999-99"
                    value={newUser.document}
                    onChange={e => setNewUser({ ...newUser, document: e.target.value })}
                  >
                    {() => (
                      <Input
                        name="document"
                        id="document"
                        type="text"
                        required
                        checked={
                          /^((?!_).)*$/.test(newUser.document) &&
                          newUser.document != null &&
                          newUser.document != '' &&
                          true
                        }
                        tabindex="3"
                        placeholder="000.000.000-00"
                      />
                    )}
                  </InputMask>
                  {/^(?=.*[0-9])((?=.*_).)*$/.test(newUser.document) && <Info>Provide a valid document</Info>}
                  {/^((?!_).)*$/.test(newUser.document) && newUser.document != null && newUser.document != '' && (
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
                    value={newUser.password}
                    tabindex="4"
                    checked={
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(newUser.password) && true
                    }
                    type={showPassword ? 'text' : 'password'}
                    onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                  />
                  <Info
                    hidden={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(newUser.password)}
                  >
                    <ul>
                      {/(?=.*[A-Z])/.test(newUser.password) ? '' : <li>Uppercase</li>}
                      {/(?=.*[a-z])/.test(newUser.password) ? '' : <li>Lowercase</li>}
                      {/(?=.*[0-9])/.test(newUser.password) ? '' : <li>Number</li>}
                      {/(?=.*[!@#\$%\^&\*])/.test(newUser.password) ? '' : <li>Special Char</li>}
                      {/(?=.{8,})/.test(newUser.password) ? '' : <li>Min 8 characters</li>}
                    </ul>
                  </Info>
                  {/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(newUser.password) && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                primary
                fullWidth
                disabled={
                  loading ||
                  /^\w+$/.test(newUser.name) ||
                  /^(?!$)+(?!\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/.test(newUser.email) ||
                  /^(?=.*[0-9])((?=.*_).)*$/.test(newUser.document) ||
                  /^(?!.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))/.test(newUser.password)
                }
              >
                Sign{loading ? 'ing' : ''} Up
              </Button>
              <Text>
                Already have an account?
                <Link href="/signin">
                  <a> Sign in</a>
                </Link>
              </Text>
            </Form>
          </FormContainer>
        )}
      </Mutation>
    </>
  );
};

export default SignUp;
export { SIGNUP_MUTATION };
