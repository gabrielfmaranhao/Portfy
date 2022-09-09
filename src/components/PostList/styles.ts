import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  background-color: var(--white);

  .list__title {
    width: 100%;
    height: 2rem;
    text-align: start;
  }

  @media screen and (min-width: 200px) and (max-width: 769px) {
    width: 100vw;
  }
`;

export const Textarea = styled.textarea`
  display: flex;
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  resize: none;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--ligth-grey);
    border-radius: 20px;
  }

  &::placeholder {
    transition: 400ms ease;
    color: var(--medium-grey);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
export const TextareaContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--white);
  box-shadow: var(--boxshadow);
  border-radius: 8px;
  overflow: hidden;
  align-items: flex-end;
  padding: 1rem;
  gap: 0.5rem;

  button {
    height: 2rem;
  }
`;
