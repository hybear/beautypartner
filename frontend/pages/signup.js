import SignUp from '@components/SignUp';
import Meta from '@components/Meta';
import PopUp from '@components/General/PopUp';

const SignUpPage = () => {
  return (
    <>
      <Meta title="Sign Up" desc="Become part of the most valuable beauty company" />
      <PopUp />
      <SignUp />
    </>
  );
};

export default SignUpPage;
