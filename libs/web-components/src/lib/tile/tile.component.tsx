import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { H3, FreeText } from '../typography';
import { ButtonLink } from '../button';
import Link from 'next/link';

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  href: string;
  hrefText: string;
  content: string;
}

const StyledTileContainer = styled.div`
  display: flex;
  background-color: var(--secondary);
  flex-direction: row;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;

const StyledTileContent = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: calc(((100% / 12) + 24px) / 2);
  padding-right: calc(((100% / 12) + 24px) / 2);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const StyledTileImage = styled.div`
  flex-basis: 50%;
  aspect-ratio: 1.5/1;
  background-color: burlywood;
`;

const StyledTileHead = styled.div`
  margin-bottom: 1rem;
`;

const StyledTileBody = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledTileFoot = styled.div``;

export const Tile: FC<TileProps> = ({
  children,
  title,
  hrefText,
  href,
  content,
}) => {
  return (
    <StyledTileContainer>
      <StyledTileContent>
        <StyledTileHead>
          <H3>{title}</H3>
        </StyledTileHead>
        <StyledTileBody>
          <FreeText dangerouslySetInnerHTML={{ __html: content }} />
        </StyledTileBody>
        <StyledTileFoot>
          <Link href={href} passHref={true}>
            <ButtonLink>{hrefText}</ButtonLink>
          </Link>
        </StyledTileFoot>
      </StyledTileContent>
      <StyledTileImage>TODO</StyledTileImage>
    </StyledTileContainer>
  );
};
