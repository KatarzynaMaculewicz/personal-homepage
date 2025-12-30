import styled from "styled-components";

export const StyledButton = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};
  border: 1px solid ${({ theme }) => theme.button.borderColor};
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.button.hoverShadow};
    transition: box-shadow 0.3s;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.button.activeShadow};
    transition: box-shadow 0.3s;
  }
`;