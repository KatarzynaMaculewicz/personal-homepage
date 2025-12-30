import { ThemeSwitch } from "../../common/ThemeSwitch/ThemeSwitch";
import { AboutPerson } from "./AboutPerson";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Container, Wrpper } from "./styled";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <Wrpper>
      <AboutPerson />
    </Wrpper>
    <Portfolio />
    <Footer />
  </Container>
);
