import { styled } from "styled-components";

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background-color: #fcfcfc;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0px 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  img {
    transform: ${({ orderby }) => (orderby === "asc" ? "rotate(180deg)" : "")};
    transition: all 0.3s ease-in;
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Card = styled.div`
  margin-top: 18px;
  padding: 8px 16px;
  background-color: #fff;

  p {
    background: ${({ theme }) => theme.colors.primary.lighter};
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 4px;
    margin-left: 8px;
    max-width: max-content;
  }
`;
