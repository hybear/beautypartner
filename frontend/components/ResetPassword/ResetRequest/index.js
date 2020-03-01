import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

// UI
import { Input, Label, Info, Checkbox } from '../../General/Form';
import { RequestResetContainer, BGImage, FormContainer, Form, Text, Logo, Error, Button } from './styles';

// ANIMATIONS
import Checked from '../../General/Animations/Checked';

// ICONS

const RequestReset = () => {
  const [User, setUser] = useState({
    email: '',
  });

  return (
    <RequestResetContainer>
      <BGImage src="/assets/signinbg-min.jpg" alt="Beauty Partner Makes" />
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={User.email}>
        {(requestReset, { error, loading }) => (
          <FormContainer>
            <Logo />
            <Form
              method="post"
              data-test="form"
              className="formReset"
              onSubmit={async e => {
                e.preventDefault();
                console.log(User);
                const res = await requestReset();
                console.log(res);
                setUser({ email: '' });
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
                Reset{loading ? 'ing' : ''} Password
              </Button>
              <Text>
                Remember your password?
                <Link href="/signin">
                  <a> Sign In</a>
                </Link>
              </Text>
            </Form>
          </FormContainer>
        )}
      </Mutation>
    </RequestResetContainer>
  );
};

export default RequestReset;
export { REQUEST_RESET_MUTATION };
