import styled from 'styled-components';

const Form = styled.form`
  width: 90%;
  max-width: 575px;
  .form__container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: auto;
    grid-gap: 15px;
    justify-content: center;
  }
  .form__grid {
    display: block;
    width: 100%;
    position: relative;
  }
  .set--ok {
    position: absolute;
    right: -20px;
    top: 45px;
    transform: translateY(-50%);
  }
`;

export default Form;
