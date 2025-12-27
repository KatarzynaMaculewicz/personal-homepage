import {
  ProjectTile,
  RepoName,
  RepoDescription,
  Links,
  LinkRow,
  Label,
  RepoLink,
} from "./styled";

const formatRepoName = (name) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const ProjectGridItem = ({ repo }) => {
  return (
    <ProjectTile>
      <RepoName>{formatRepoName(repo.name)}</RepoName>
      <RepoDescription>{repo.description || ""}</RepoDescription>
      <Links>
        {repo.homepage && (
          <LinkRow>
            <Label>Demo:</Label>
            <RepoLink href={repo.homepage} target="_blank" rel="noreferrer">
              {repo.homepage}
            </RepoLink>
          </LinkRow>
        )}

        {repo.html_url && (
          <LinkRow>
            <Label>Code:</Label>
            <RepoLink href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.html_url}
            </RepoLink>
          </LinkRow>
        )}
      </Links>
    </ProjectTile>
  );
};
