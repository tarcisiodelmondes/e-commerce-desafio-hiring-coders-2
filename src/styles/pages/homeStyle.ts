import styled from "styled-components";

export const HomeStyle = styled.main`
  margin-bottom: 4rem;

  .content-products {
    padding: 1rem;
  }

  .section-product {
    h2 {
      margin-top: 1.5rem;
      font-size: 1.5rem;
    }

    .products {
      display: grid;
    }
  }

  @media (min-width: 600px) {
    .products {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (min-width: 1000px) {
    .products {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(1, 1fr);
      gap: 1.5rem;
    }
  }
`;
