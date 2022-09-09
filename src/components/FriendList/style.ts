import styled from "styled-components";
import { IFriendListSlide } from "../../interfaces/styles";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-bottom: 9vh;
  height: 70%;
  width: 17rem;
  gap: 0.5rem;
  background-color: var(--whitesmoke);
  box-sizing: border-box;
  padding: 1rem;
  bottom: ${({ yPos }: IFriendListSlide) => yPos};
  right: 0.2rem;
  z-index: 2;
  animation: ${({ animationName }: IFriendListSlide) => animationName} 1 300ms
    linear;

  .friendlist__header {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  ul {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: scroll;
    padding: 0.5rem;

    li {
      padding: 1rem;
      height: 4rem;
      min-height: 4rem;
      border-radius: 8px;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 400ms;

      &:active {
        background-color: var(--white);
      }

      img {
        height: 3rem;
        border-radius: 50%;
      }
    }
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 769px) {
    position: static;
    background-color: var(--white);
    box-shadow: var(--boxshadow);
    width: 100%;
    max-height: 50vh;
    border-radius: 8px;
    z-index: unset;
    animation: unset;

    ul {
      flex-direction: row;
      flex-wrap: wrap;

      &::-webkit-scrollbar {
        width: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--ligth-grey);
        border-radius: 20px;
      }

      li {
        background-color: var(--whitesmoke);
        cursor: pointer;
        width: 47%;
        transition: 400ms ease;

        &:hover {
          background-color: var(--faded-green);
        }
      }
    }

    @media (min-width: 1042px) {
      ul {
        li {
          width: 32%;
        }
      }
    }
  }

  @keyframes slide-in {
    from {
      bottom: -70vh;
    }
    to {
      bottom: 9vh;
    }
  }

  @keyframes slide-out {
    from {
      bottom: 9vh;
    }
    to {
      bottom: -70vh;
    }
  }
`;
