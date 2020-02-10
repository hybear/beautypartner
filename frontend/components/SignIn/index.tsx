import { StyledP, SampleWithProps } from './styles';

interface IProps {
  text?: string;
}

const SignIn = (props: IProps) => (
  <>
    <h1>SignIn!</h1>
    <StyledP>
      <SampleWithProps visible={true}>🐶{props.text}🦄🐔</SampleWithProps>
      <SampleWithProps visible={false}>🐶{props.text}🦄🐔</SampleWithProps>
      UE
    </StyledP>
  </>
);

export default SignIn;
