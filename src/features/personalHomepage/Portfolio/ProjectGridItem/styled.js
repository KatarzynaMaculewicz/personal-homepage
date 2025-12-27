import styled from "styled-components";

export const ProjectTile = styled.div`
  background-color: ${({ theme }) => theme.tileBackground};
  width: 100%;
  min-height: 322px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.tileBorder};
  box-shadow: ${({ theme }) => theme.tileShadow};
  padding: 56px;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.tileBorderHover};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-height: 230px;
    padding: 24px;
  }
`;

export const RepoName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.repoName};
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const RepoDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Links = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkRow = styled.div`
  display: flex;
  gap: 6px;
  font-size: 14px;
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const RepoLink = styled.a`
  color: ${({ theme }) => theme.link};
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  text-decoration: none;
  border-bottom: 2px solid ${({ theme }) => theme.textDecorationColor};
  letter-spacing: 5%;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.link};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
