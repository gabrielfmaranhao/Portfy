import styled from "styled-components";

export const ContainerFeed = styled.div`
  padding: 0 0.7rem;
  padding-top: 6.2rem;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    gap: 2rem;

    .container__friends {
      height: 30rem;
      
      ul {
        flex-direction: column;
        flex-wrap: nowrap;

        li {
          width: 100%;
        }
      }

    }
  }

  .display-nome_mobile {
    display: none;
    
    @media (min-width: 1000px) {
      display: unset;
    }
  }
`;

export const DivLeft = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
  }
`;

export const DivMidle = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    min-width: 350px;
  }
`;

export const DivRight = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 1rem;
  }
`;

export const UlPosts = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  margin-top: 1rem;
  width: 35rem;

  li {
    position: relative;
    display: flex;
    gap: 2rem;
    background-color: var(--white);
    box-shadow: var(--boxshadow);
    padding: 1rem;
    border-radius: 10px;

    .div-description {
      span {
        font-size: 0.8rem;
        color: var(--medium-grey);
      }
    }
  }

  img {
    width: 5rem;
    border-radius: 50%;
  }

  .div-description {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2 {
    font-size: 1.1rem;
  }

  span {
    font-size: 0.9rem;
  }

  .button-delete {
    position: absolute;
    right: 20px;
    padding: 0;
    border: 0;
    background-color: transparent;
    height: max-content;
  }
`;
