import { LoaderWrapper, LoadingInfo, LoadingSpinner } from "./styled";

export const Loader = () => (
  <>
    <LoaderWrapper>
      <LoadingInfo>Please wait, projects are being loaded...</LoadingInfo>
      <LoadingSpinner />
    </LoaderWrapper>
  </>
);
