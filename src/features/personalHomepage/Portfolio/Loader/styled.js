import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../../images/icon-spinner.svg";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const LoaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingInfo = styled.p`
  color: ${({ theme }) => theme.textHeader};
  font-size: 20px;
  font-weight: 400;
  margin-top: 64px;
`;

export const LoadingSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  width: 160px;
  height: 160px;
`;
