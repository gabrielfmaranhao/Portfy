import styled from "styled-components";

const Form = styled.form`
  display: flex;
  background-color: var(--whitesmoke);
  flex-direction: column;
  width: 100%;
  max-width: 95%;
  gap: 1rem;
  padding: 2rem 1rem 1rem 1rem;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  align-items: center;

  h3 {
    text-align: center;
    font-size: 1.2rem;
  }

  label {
    font-size: 0.85rem;
    text-align: start;
    width: 95%;
  }

  div, button, select {
    width: 100%;
  }

  p {
    font-size: 0.9rem;
    margin: 1rem 0;

    span {
      color: var(--medium-blue);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Form;
