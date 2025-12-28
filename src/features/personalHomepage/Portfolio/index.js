import { useEffect, useState } from "react";
import {
  PortfolioWrapper,
  GitHubIcon,
  PortfolioHeader,
  RecentProjects,
  ProjectsGrid,
} from "./styled";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { ProjectGridItem } from "./ProjectGridItem";

const LOADER_DELAY = 800;

export const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    fetch("https://api.github.com/users/KatarzynaMaculewicz/repos?per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setRepos(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError(true);
        }
      })
      .finally(() => {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(LOADER_DELAY - elapsed, 0);

        setTimeout(() => {
          if (isMounted) {
            setLoading(false);
          }
        }, remainingTime);
      });

    return () => {
      isMounted = false;
    };
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
      {loading && <Loader />}
      {error && !loading && <Error />}
      {!loading && !error && (
        <ProjectsGrid>
          {sortedProjects.map((repo) => (
            <ProjectGridItem key={repo.id} repo={repo} />
          ))}
        </ProjectsGrid>
      )}
    </PortfolioWrapper>
  );
};
