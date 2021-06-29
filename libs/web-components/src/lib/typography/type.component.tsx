import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface TypeStyledProps extends HTMLAttributes<HTMLElement> {
  marginBottom?: boolean;
  /* Configures color */
  color?: 'primary' | 'secondary';
}

export interface TypeProps extends TypeStyledProps {
  element: 'h1' | 'h2' | 'p';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const StyleXL = styled.span<TypeStyledProps>`
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 2.625rem;
  letter-spacing: -0.1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '1rem' : '0')};

  color: ${({ color }) =>
    color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
`;

const StyledLG = styled.span<TypeStyledProps>`
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.875rem;
  letter-spacing: -0.1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '1rem' : '0')};

  color: ${({ color }) =>
    color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
`;

const StyledMD = styled.span<TypeStyledProps>`
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.74rem;
  letter-spacing: -0.03rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '1rem' : '0')};

  color: ${({ color }) =>
    color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
`;

const StyledSM = styled.span<TypeStyledProps>`
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.74rem;
  letter-spacing: -0.03rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '1rem' : '0')};

  color: ${({ color }) =>
    color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
`;

const StyledInteractive = styled.a`
  display: inline-block;
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.74rem;
  letter-spacing: -0.03rem;
  text-decoration: underline;
  color: var(--interactive-link);

  transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  &:focus {
    outline-offset: 0.25rem;
    outline: transparent solid 2px;
    box-shadow: 0 -2px 0 4px var(--background),
      0 -2px 0 6px var(--interactive-link);
  }
`;

const StyledFreeText = styled.div<TypeStyledProps>`
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;

  color: ${({ color }) =>
    color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};

  h1 {
    font-size: 2.25rem;
    line-height: 2.625rem;
    letter-spacing: -0.1rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: -0.1rem;
    margin-bottom: 1rem;
  }

  p,
  li,
  a {
    font-size: 1.125rem;
    line-height: 1.74rem;
    letter-spacing: -0.03rem;
  }

  p,
  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    color: var(--interactive-link);
  }

  a:focus {
    outline-offset: 0.25rem;
    outline: transparent solid 2px;
    box-shadow: 0 -2px 0 4px var(--background),
      0 -2px 0 6px var(--interactive-link);
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  *:last-child {
    margin-bottom: 0;
  }
`;

const TypeStyles = {
  sm: StyledSM,
  md: StyledMD,
  lg: StyledLG,
  xl: StyleXL,
};

export const Type: FC<TypeProps> = ({
  element: Element = 'p',
  color = 'primary',
  size = 'sm',
  children,
  ...props
}) => {
  const TypeStyle = TypeStyles[size];

  return (
    <Element>
      <TypeStyle color={color} {...props}>
        {children}
      </TypeStyle>
    </Element>
  );
};

export const H1: FC<TypeStyledProps> = ({ children, color, ...props }) =>
  Type({
    element: 'h1',
    size: 'xl',
    color,
    children,
    ...props,
  });

export const H2: FC<TypeStyledProps> = ({ children, color, ...props }) =>
  Type({
    element: 'h2',
    size: 'lg',
    color,
    children,
    ...props,
  });

export const H3: FC<TypeStyledProps> = ({ children, color, ...props }) =>
  Type({
    element: 'h2',
    size: 'md',
    color,
    children,
    ...props,
  });

export const P: FC<TypeStyledProps> = ({ children, color, ...props }) =>
  Type({
    element: 'p',
    size: 'sm',
    color,
    children,
    ...props,
  });

export const A = StyledInteractive;
export const FreeText = StyledFreeText;
