import styled from "styled-components";
import { IPhoneFrameProps } from "../../interfaces/components";

export const Phone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: 100% 100%;
  height: 20rem;
  width: 12rem;
  border: 7px solid var(--white);
  border-radius: 10px;
  animation: ${({ animation, slide, delay }: IPhoneFrameProps) =>
    `${animation}-${slide} 1 ${delay}ms linear`};

  span {
    position: absolute;
    top: 0;
    background-color: var(--white);
    margin: -2px;
    width: 50%;
    height: 3%;
    border-radius: 0 0 4px 4px;
  }

  @keyframes slide-from-top {
    0% {
      transform: translateY(-100rem);
    }
    90% {
      transform: translateY(0rem);
    }
    95% {
      transform: translateY(0.5rem);
    }
    100% {
      transform: translateY(0rem);
    }
  }

  @keyframes slide-from-bottom {
    0% {
      transform: translateY(100rem);
    }
    90% {
      transform: translateY(0rem);
    }
    95% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(0rem);
    }
  }

  @keyframes slide-back-top {
    0% {
      transform: translateY(0rem);
    }
    5% {
      transform: translateY(0.5rem);
    }
    10% {
      transform: translateY(0rem);
    }
    100% {
      transform: translateY(-100rem);
    }
  }

  @keyframes slide-back-bottom {
    0% {
      transform: translateY(0rem);
    }
    5% {
      transform: translateY(-0.5rem);
    }
    10% {
      transform: translateY(-0rem);
    }
    100% {
      transform: translateY(100rem);
    }
  }
`;
