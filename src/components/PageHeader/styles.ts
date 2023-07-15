import { styled } from "styled-components";

export const Container = styled.header`
  margin-bottom: 24px;
  a {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
