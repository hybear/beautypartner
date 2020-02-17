import styled from 'styled-components';

const Form = styled.form`
  /* width: 90%; */
  /* max-width: 575px; */
  .form__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));
    grid-auto-rows: auto;
    grid-gap: 15px;
    justify-content: center;
    max-width: 575px;
    margin: 0 auto;
  }
  .form__grid {
    display: block;
    width: 100%;
    position: relative;
  }
  .set--ok {
    position: absolute;
    right: -20px;
    /* top: 45px; */
    transform: translateY(-70%);
  }
`;

export default Form;
