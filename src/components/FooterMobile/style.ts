import styled from "styled-components";

export const ContainerFooterMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: linear-gradient(91.66deg, #47dac5 9.15%, #4a90e2 90.02%);
  color: var(--white);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;

  .FooterIcons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 400px;
  }
  @media (min-width: 1000px) {
    & {
      display: none;
    }
  }
`;
