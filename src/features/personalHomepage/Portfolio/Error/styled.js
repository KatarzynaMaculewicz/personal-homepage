import styled from "styled-components";
import { ReactComponent as DangerSvg } from "../../../../images/Danger.svg";

export const ErrorWrapper = styled.div`
  margin: 64 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DangerIcon = styled(DangerSvg)`
  color: ${({ theme }) => theme.textHeader};
  margin-top: 64px;
  width: 48px;
  height: 48px;
`;

export const ErrorHeader = styled.h3`
  color: ${({ theme }) => theme.textHeader};
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.textHeader};
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin-bottom: 32px;
`;
export const GitButton = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};
  border: 1px solid ${({ theme }) => theme.button.borderColor};
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  padding: 12px 16px;
  margin-bottom: 140px;

  &:hover {
    box-shadow: ${({ theme }) => theme.button.hoverShadow};
    transition: box-shadow 0.3s;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.button.activeShadow};
    transition: box-shadow 0.3s;
  }
`;
