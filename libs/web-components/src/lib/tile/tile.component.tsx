import { FC, HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import shortid from 'shortid';

import { H3, FreeText } from '../typography';
import { ButtonLink } from '../button';

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  href: string;
  hrefText: string;
  content: string;
  imgUrl: string;
  imgDimensions: {
    width: number;
    height: number;
  };
  imgAlt: string;
}

const StyledTileContainer = styled.div`
  display: flex;
  background-color: var(--secondary);
  flex-direction: column-reverse;
  margin-bottom: var(--gutter);

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;

    :nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

`;

const StyledTileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: calc(((100% / 12) + 24px) / 2);
  padding-right: calc(((100% / 12) + 24px) / 2);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const StyledTileImage = styled.div`
  aspect-ratio: 1.5/1;
  background-color: burlywood;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const StyledTileHead = styled.div`
  margin-bottom: 1rem;
`;

const StyledTileBody = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledTileFoot = styled.div``;

export const Tile: FC<TileProps> = ({
                                      imgUrl,
                                      imgAlt,
                                      imgDimensions,
                                      title,
                                      hrefText,
                                      href,
                                      content
                                    }) => {

  const [id, setId] = useState('');

  useEffect(() => {
    setId(shortid());
  }, []);

  return (
    <StyledTileContainer>
      <StyledTileContent>
        <StyledTileHead id={id}>
          <H3>{title}</H3>
        </StyledTileHead>
        <StyledTileBody>
          <FreeText dangerouslySetInnerHTML={{ __html: content }} />
        </StyledTileBody>
        <StyledTileFoot>
          <Link href={href} passHref={true}>
            <ButtonLink aria-describedby={id}>{hrefText}</ButtonLink>
          </Link>
        </StyledTileFoot>
      </StyledTileContent>
      <StyledTileImage>
        <Image src={imgUrl}
               alt={imgAlt}
               width={imgDimensions.width}
               height={imgDimensions.height}
               layout={'responsive'}
               objectFit={'fill'} />
      </StyledTileImage>
    </StyledTileContainer>
  );
};
