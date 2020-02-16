import SignIn from '@components/SignIn';
import { useContext } from 'react';
import { Me } from '@components/Middleware';
import Meta from '@components/Meta';

function SignInPage() {
  const User = useContext(Me);
  console.log(User);
  return (
    <>
      <Meta title="Sign In" desc="Become part of the most valuable beauty company" />
      <SignIn />
    </>
  );
}

export default SignInPage;
