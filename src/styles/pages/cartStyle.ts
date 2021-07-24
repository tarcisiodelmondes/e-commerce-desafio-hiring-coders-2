import styled from "styled-components";
import { colorLight, colorPrimary } from "../colors";

export const CartStyle = styled.div`
  .cart-container {
    position: relative;

    span {
      position: absolute;
      top: -4px;
      right: -8px;

      background-color: ${colorPrimary};
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      color: ${colorLight};

      padding: 0.5px 6px;
      font-weight: 600;
      font-size: 0.975rem;
    }
  }
`;
