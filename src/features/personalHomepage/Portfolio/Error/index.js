import { StyledButton } from "../../../../common/Button/styled";
import { DangerIcon, ErrorHeader, ErrorMessage } from "./styled";

export const Error = () => (
  <>
    <DangerIcon />
    <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
    <ErrorMessage>
      Sorry, failed to load Github projects.
      <br /> 
      You can check them directly on Github.
    </ErrorMessage>
    <StyledButton href="https://github.com/KatarzynaMaculewicz">
      Go to Github
    </StyledButton>
  </>
);
