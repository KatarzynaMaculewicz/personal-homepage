import {
  AboutPersonWrapper,
  Photo,
  InfoContainer,
  ThisIs,
  Name,
  About,
  MailIcon
} from "./styled";
import { StyledButton } from "../../../common/Button/styled";
import photo from "../../../images/photo.jpg";

export const AboutPerson = () => (
  <>
    <AboutPersonWrapper>
      <Photo src={photo} alt="Katarzyna Maculewicz" />
      <InfoContainer>
        <ThisIs>THIS IS</ThisIs>
        <Name>Katarzyna Maculewicz</Name>
        <About>
          👩🏻‍💻 I’m a passionate Frontend Developer in love with React,
          <br />
          currently looking for new job opportunities.
        </About>
        <StyledButton href="mailto:qla.katarzyna@gmail.com">
          <MailIcon />
           Hire me
        </StyledButton>
      </InfoContainer>
    </AboutPersonWrapper>
  </>
);
