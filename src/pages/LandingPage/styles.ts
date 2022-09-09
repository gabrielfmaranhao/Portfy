import styled from "styled-components";
import { IAnimationContent } from "../../interfaces/styles";

export const LandingPageBackground = styled.div`
  min-height: 100vh;
  background: var(--gradient);
  display: flex;
  align-items: center;
  overflow: hidden;

  .allContent {
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
  }

  .portfyContents {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .portfyName {
      color: var(--green-black);
      font-size: 1.5rem;
      font-family: "Goldman";
    }
  }

  .containerBottonContent {
    flex-direction: column-reverse;
    min-height: 5.4rem;
    display: flex;
    gap: 0.5rem;
  }

  .landingPagePhones {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 0 5%;

    .allContent {
      align-items: flex-start;
      max-width: 50%;
    }

    .containerTopContent {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      min-height: 18rem;
    }

    .portfyContents {
      flex-direction: row;
    }

    .landingPagePhones {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-sizing: border-box;

      width: 70rem;
      max-width: 100vw;
      height: 100vh;

      position: fixed;
      right: 0;
    }
  }
`;

export const ParagraphText = styled.p`
  display: none;
  width: 395px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: var(--green-black);
  animation: ${({ animation }: IAnimationContent) => animation};

  @media (min-width: 1024px) {
    display: block;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const CircleBG = styled.div`
  top: -5rem;
  left: -5rem;

  width: 100vw;
  height: 100vw;
  border-width: 0 2rem 0 2rem;
  position: fixed;
  box-sizing: border-box;
  border-radius: 50%;
  border-style: solid;
  border-color: var(--medium-green);
  animation: spin infinite 20s linear;

  @media (min-width: 1024px) {
    top: -15rem;
    left: -10rem;

    width: 50rem;
    height: 50rem;
  }

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
  }
`;

export const FormScreen = styled.div`
  animation: ${({ animation }: IAnimationContent) =>
    `${animation} 1 800ms linear`};
  display: ${({ display }) => display};
  background-color: var(--whitesmoke);
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--ligth-grey);
    border-radius: 20px;
  }

  .form__exit-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
  }

  .smartphone__detail {
    display: none;
  }

  label,
  div,
  button,
  select {
    max-width: 30rem;
  }

  button {
    margin: 1.2rem 0;
  }

  h5 {
    font-weight: 500;
    color: var(--dark-grey);
    line-height: 1rem;
    font-size: 0.9rem;
    margin-top: 5%;
  }

  a {
    align-self: center;
    color: var(--black);
    transition: ease 400ms;
    cursor: pointer;

    &:hover {
      color: var(--medium-blue);
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 24rem;
    height: 40rem;
    max-width: 57vh;
    max-height: 95vh;
    border: 1rem solid var(--white);
    border-radius: 1rem;
    position: relative;

    .form__exit-button {
      display: none;
    }

    .smartphone__detail {
      display: unset;
      position: absolute;
      top: 0;
      width: 50%;
      height: 1.3rem;
      background-color: white;
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateX(50rem);
    }
    85% {
      transform: translateX(0rem);
    }
    90% {
      transform: translateX(-1rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0rem);
    }
    10% {
      transform: translateX(-1rem);
    }
    15% {
      transform: translateX(0rem);
    }
    100% {
      transform: translateX(50rem);
    }
  }

  @keyframes drop-down {
    from {
      transform: translateY(-101rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  @keyframes ride-up {
    from {
      transform: translateY(0rem);
    }
    to {
      transform: translateY(-101rem);
    }
  }
`;
