import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonLinkProps extends HTMLAttributes<HTMLLinkElement> {
  secondary?: boolean;
}

export const ButtonLink = styled.a<ButtonLinkProps>`
  display: inline-block;
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-weight: normal;
  font-size: 1.175rem;
  line-height: 1.175rem;
  text-align: center;
  padding: 1rem 1.5rem 0.75rem;
  border-radius: 3rem;
  letter-spacing: -0.03rem;
  text-decoration: none;
  background-color: var(--interactive);
  color: var(--secondary);
  transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  :focus {
    outline-offset: 0.25rem;
    outline: transparent solid 2px;
    box-shadow: 0 0 0 3px var(--secondary), 0 0 0 6px var(--primary);
  }
`;
