import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  padding: 0 5%;
  background-image: var(--gradient);
  z-index: 2;

  svg {
    cursor: pointer;
  }

  img {
    height: 8vh;
    width: 8vh;
    border-radius: 50%;
    border: 2px solid var(--green-black);
  }

  button {
    max-height: 60%;
    line-height: 0;
  }

  .HeaderContent {
    display: flex;
    gap: 3rem;
    align-items: center;

    .HeaderPortfyLogo {
      font-family: "Goldman";
      font-size: 1.3rem;
      color: var(--green-black);
    }

    .HeaderButtons {
      display: none;

      button {
        background-color: transparent;
      }
    }
  }

  .SearchInputContainer,
  .HeaderUserConfigs {
    display: none;
  }

  @media (min-width: 1024px) {
    align-items: center;
    padding: 0 5%;

    .HeaderContent {
      .HeaderButtons {
        display: flex;
      }

      img {
        display: none;
      }
    }

    .HeaderButtons {
      display: flex;
      background-color: transparent;
      border: none;
    }

    .SearchInputContainer {
      display: flex;
      border-radius: 8px;
      overflow: hidden;
      align-items: center;
      background-color: var(--white);
      padding: 0 1rem;
      height: 70%;
      width: 40%;
      max-width: 30rem;
      justify-content: space-between;

      .SearchInput {
        border: none;
        outline: none;

        &::placeholder {
          color: var(--medium-grey);
          font-size: 0.65rem;
          transition: 400ms ease-in;
        }

        &:focus::placeholder {
          color: #0000;
        }
      }
    }

    .HeaderUserConfigs {
      display: flex;
      align-items: center;
      gap: 1rem;

      .HeaderUserName {
        color: var(--green-black);
        font-size: 0.8rem;
      }
    }
  }
`;
