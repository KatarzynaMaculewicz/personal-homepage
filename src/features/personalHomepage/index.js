import { ThemeSwitch } from "../../common/ThemeSwitch/ThemeSwitch";
import { AboutPerson } from "./AboutPerson";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Container, Wrapper } from "./styled";
import { Skills } from "./Skills";
import { skills, futureSkills } from "./Skills/SkillsList"

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <Wrapper>
      <AboutPerson />
      <Skills header={"My skillset includes 🛠️"} skills={skills} />
      <Skills header={"What I want to learn next 🚀"} skills={futureSkills} />
    </Wrapper>
    <Portfolio />
    <Footer />
  </Container>
);
