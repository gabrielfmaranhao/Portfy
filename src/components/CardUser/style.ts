import styled from "styled-components";
import { IButtonIconProp, IUserBG } from "../../interfaces/styles";

export const ContainerCardUser = styled.div`
  position: relative;
  display: flex;
  height: 20rem;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: var(--boxshadow);
  padding-top: 8.5rem;

  .cover-photo {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 9rem;
    background-image: ${({cover}: IUserBG) => `url(${cover})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .user-description {
    display: flex;
    gap: 1rem;
    height: 5rem;
    align-items: center;
    margin: 0 1rem;
    box-sizing: border-box;

    img {
      top: -100%;
      width: 5rem;
      border-radius: 50%;
    }

    .userName {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      p {
        font-size: 0.7rem;
        color: var(--medium-grey);
      }

      h3 {
        font-size: 1.1rem;
      }
    }
  }

  .description-icon {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .icon {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .followers-following {
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 2rem;
    height: 4rem;

    .followers-following-children {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    p {
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 426px) {
    padding-bottom: 2rem;

    .user-description {
      height: 8rem;
    }

    .followers-following {
      height: 8rem;
    }
  }

  @media (min-width: 769px) {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const ButtonIcon = styled.button<IButtonIconProp>`
  display: flex;
  border: none;
  background-color: var(--white);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  svg {
    opacity: 0.7;
    transition: 200ms ease;

    &:hover {
      opacity: 1;
    }
  }
`;
