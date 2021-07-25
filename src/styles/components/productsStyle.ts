import styled from "styled-components";
import { colorLight, colorPrimary, colorPrimaryDark } from "../colors";

export const ProductStyle = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${colorLight};
  border-radius: 5px;
  box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.1);

  margin-top: 1rem;
  padding: 1rem 0 1rem 0;

  .content-img {
    width: 100px;
    height: 150px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    margin-top: 1rem;
    text-align: left;
    font-size: 1rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin-top: 1rem;
  }

  button {
    border: none;
    background-color: ${colorPrimary};
    border-radius: 5px;
    color: ${colorLight};
    padding: 0.4rem 0.8rem;
    font-weight: 700;
    margin-top: 1rem;
    transition: all .3s;

    &:hover {
        background-color: ${colorPrimaryDark};
    }
  }
`;
