import styled from 'styled-components';
import { FC } from 'react';
import { H1 } from '../typography';

interface SectionProps {
  secondary?: boolean;
  title?: string;
  paddingTop?: boolean;
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
  flex-direction: column;
  padding-top: ${({ paddingTop }) => paddingTop ? '2rem' : '0'};
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-top: ${({ paddingTop }) => paddingTop ? '3rem' : '0'};
    padding-bottom: 3rem;
  }
`;

const StyledSectionContent = styled.div`
  flex-grow: 1;
  max-width: 1008px;
  margin: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`;

const StyledSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Section: FC<SectionProps> = ({ children, secondary, title, paddingTop = true }) => (
  <StyledSection secondary={secondary} paddingTop={paddingTop}>
    {title && (
      <StyledSectionContent>
        <StyledSectionTitle>
          <H1>{title}</H1>
        </StyledSectionTitle>
      </StyledSectionContent>
    )}
    <StyledSectionContent>{children}</StyledSectionContent>
  </StyledSection>
);
