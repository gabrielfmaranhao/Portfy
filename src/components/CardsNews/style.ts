import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 100%;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--boxshadow);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    margin-top: 20px;
    font-size: 20px;
  }
  
  ul {
    width: 100%;
    max-height: 85vh;
    gap: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;

    li {
      height: fit-content;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--ligth-grey);
      border-radius: 20px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 16px;
    }
  }
`;

export const Card = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--ligth-grey);
  height: 10rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem 2rem;

  a {
    font-size: 16px;
    color: var(--dark-grey);
    font-weight: 700;
    transition: 200ms ease-in-out;

    &:hover {
      color: var(--dark-blue);
    }
  }

  span {
    font-size: 14px;
  }

  p {
    font-size: 10px;
    color: var(--medium-grey);
  }

  a {
    font-size: 14px;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem;
    a {
      font-size: 12px;
    }
    p {
      display: none;
    }
  }
`;
