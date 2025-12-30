import styled from "styled-components";
import { ReactComponent as DangerSvg } from "../../../../images/Danger.svg";

export const ErrorWrapper = styled.div`
  margin: 64 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 140px;
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
