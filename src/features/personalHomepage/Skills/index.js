import { Header, SkillsSection, SkillsList, Skill, Dot } from "./styled";

export const Skills = ({ header, skills }) => {
  return (
    <SkillsSection>
      <Header>{header}</Header>
      <SkillsList>
        {skills.map((skill) => (
          <Skill key={skill}>
            <Dot />
            {skill}
          </Skill>
        ))}
      </SkillsList>
    </SkillsSection>
  );
};
