import { useEffect, useState } from "react";
import {
  PortfolioWrapper,
  GitHubIcon,
  PortfolioHeader,
  RecentProjects,
  ProjectsGrid,
} from "./styled";
import { ProjectGridItem } from "./ProjectGridItem";

export const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/KatarzynaMaculewicz/repos?per_page=100")
      .then((res) => res.json())
      .then(setRepos)
      .catch(console.error);
  }, []);

  const collaborations = [
    {
      id: "collab-1",
      name: "movie-browser",
      description: "Movie browser - group project",
      html_url: "https://github.com/romvsss/movies-browser-group-project",
    },
  ];

  const order = [
    "movie-browser",
    "To-do-list-React",
    "Currency-calculator-react",
    "To-do-list",
    "Currency-calculator",
    "types-of-coffee",
  ];

  const allProjects = [...repos, ...collaborations];

  const sortedProjects = order
    .map((name) => allProjects.find((project) => project.name === name))
    .filter(Boolean);

  return (
    <PortfolioWrapper>
      <GitHubIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <RecentProjects>My recent projects</RecentProjects>
      <ProjectsGrid>
        {sortedProjects.map((repo, idx) => (
          <ProjectGridItem key={repo.id || idx} repo={repo} />
        ))}
      </ProjectsGrid>
    </PortfolioWrapper>
  );
};
