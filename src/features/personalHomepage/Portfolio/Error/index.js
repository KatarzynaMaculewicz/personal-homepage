import { DangerIcon, ErrorHeader, ErrorMessage, GitButton } from "./styled";

export const Error = () => (
  <>
    <DangerIcon />
    <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
    <ErrorMessage>
      Sorry, failed to load Github projects.
      <br /> 
      You can check them directly on Github.
    </ErrorMessage>
    <GitButton href="https://github.com/KatarzynaMaculewicz">
      Go to Github
    </GitButton>
  </>
);
