import styled from "styled-components";

export const SkillsSection = styled.section`
  margin-top: 73px;
  padding: 32px;
  background-color: ${({ theme }) => theme.tileBackground};
  box-shadow: ${({ theme }) => theme.tileShadow};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.textHeader};
  margin: 0px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding-bottom: 13px;
  border-bottom: 1px solid ${({ theme }) => theme.tileBorder};
`;

export const SkillsList = styled.ul`
  padding: 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 32px;
  margin-top: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const Skill= styled.li`
  display: flex;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 18px;
`;

export const Dot = styled.div`
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.link};
    border-radius: 50%;
    transition: background-color 0.3s;
    margin-right: 7px;

      @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 6px;
  }
`;