import styled from "styled-components";

export const ErrorTooltip = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  cursor: help;

  svg {
    height: 1.1rem;
    width: 1.1rem;
    color: var(--color-negative);
  }
  
  &:hover .tooltip,
  &:hover .modal-tooltip {
    opacity: 1;
    transition: 200ms ease-in-out;
  }

  .tooltip,
  .modal-tooltip {
    top: 90%;
    right: 0.2rem;
    position: absolute;
    font-size: 0.7rem;
    max-width: 25ch;
    padding: 0.5rem;
    background-color: var(--ligth-grey);
    border-radius: 4px;
    opacity: 0;

    &:hover {
    }

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: var(--ligth-grey) transparent;
      position: absolute;
      right: 0.6rem;
      top: -0.4rem;
      transform: rotate(180deg);
      z-index: 5;
    }
  }
`;
