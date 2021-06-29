import styled from 'styled-components';
import { FC } from 'react';

interface SectionProps {
  secondary?: boolean;
}

const StyledSection = styled.section<SectionProps>`
  ${({ secondary }) =>
    secondary &&
    `
    --background: var(--background-invert);
    --primary: var(--primary-invert);
    --secondary: var(--secondary-invert);
    --interactive: var(--interactive-invert);
    --interactive-link: var(--interactive-link-invert);
  `}
  background-color: var(--background);
  display: flex;
`;

const StyledSectionContent = styled.div`
  flex-grow: 1;
  max-width: 1008px;
  margin: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const Section: FC<SectionProps> = ({ children, secondary }) => (
  <StyledSection secondary={secondary}>
    <StyledSectionContent>{children}</StyledSectionContent>
  </StyledSection>
);
