import styled from "styled-components";
import { colorGray, colorLight } from "../colors";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorGray};
  padding: 3rem 0;

  p {
    font-size: 1.2rem;
    color: ${colorLight};
  }
`;
