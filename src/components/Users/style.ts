import styled from "styled-components";

export const ContainerCardUsers = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 40rem;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--boxshadow);
  display: flex;
  flex-direction: column;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--ligth-grey);
      border-radius: 20px;
    }
  }
`;

export const LiContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 3rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  h3 {
    font-size: 0.8rem;
    max-width: 13ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ButtonFolow = styled.button`
  white-space: nowrap;
  width: max-content;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: var(--ligth-blue);
  color: var(--white);
  border: 0;
`;

export const ButtonUnFolow = styled.button`
  white-space: nowrap;
  width: max-content;
  padding: 2px 5px;
  border-radius: 5px;
  border: 0;
`;
