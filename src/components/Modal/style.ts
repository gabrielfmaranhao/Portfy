import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: var(--faded-black);
  backdrop-filter: blur(2px);
  z-index: 5;

  form {
    max-width: 95%;
    width: 20rem;
  }

  .divHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .divHeader {
    display: flex;

    svg {
      cursor: pointer;
    }
  }

  .doubled__buttons {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;
