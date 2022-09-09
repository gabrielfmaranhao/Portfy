import styled from "styled-components";

export const ContainerFeed = styled.div`
  padding: 6vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 15vh 5% 5% 5%;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const MainFeed = styled.main`
  @media (min-width: 769px) {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    min-width: 50%;
  }
`;

export const DivLeft = styled.div``;

export const DivMidle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0;
  box-sizing: border-box;
  gap: 1rem;

  h2 {
    padding: 0 1rem;
  }
`;

export const DivRight = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  gap: 1rem;

  @media (min-width: 769px) {
    min-width: 30%;
    max-width: 30%;
  }
`;
