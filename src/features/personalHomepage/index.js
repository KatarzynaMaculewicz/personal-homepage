import { ThemeSwitch } from "../../common/ThemeSwitch/ThemeSwitch";
import { AboutPerson } from "./AboutPerson";
import { Portfolio } from "./Portfolio";
import { Container } from "./styled";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <AboutPerson />
    <Portfolio />
  </Container>
);
