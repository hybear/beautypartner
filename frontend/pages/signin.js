import SignIn from '@components/SignIn';
import { useContext } from 'react';
import { Me } from '@components/Middleware';

function SignInPage() {
  const User = useContext(Me);
  console.log(User);
  return <SignIn />;
}

export default SignInPage;
