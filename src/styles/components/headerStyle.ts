import styled from "styled-components";
import {
  colorLight,
  colorPrimary,
  colorPrimaryDark,
  colorPrimaryLight,
} from "../colors";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;

  height: 5rem;
  padding: 1rem;

  background-color: ${colorLight};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colorPrimary};
  }

  form {
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    input {
      width: 65%;
      height: 100%;
      height: 0.5rem;
      font-size: 1rem;
      padding: 0.8rem;
      border-radius: 5px 0 0 5px;
      border: 2px solid ${colorPrimaryLight};

      outline-color: ${colorPrimaryDark};
      outline-width: 2px;

      &::placeholder {
        opacity: 0.5;
        font-size: 1rem;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 0.5rem;
      padding: 0.8rem;
      background-color: ${colorPrimaryLight};
      border: 2px solid ${colorPrimaryLight};

      border-radius: 0 5px 5px 0;

      color: ${colorLight};
      outline-color: ${colorPrimaryDark};
      outline-width: 2px;
      transition: all 0.3s;

      &:hover {
        background-color: ${colorPrimaryDark};
        border: 2px solid ${colorPrimaryDark};
      }
    }
  }

  .cart-icon {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (min-width: 920px) {
    padding: 2.5rem;
  }
`;
