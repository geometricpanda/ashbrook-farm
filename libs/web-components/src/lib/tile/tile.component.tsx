import { FC, HTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';
import shortid from 'shortid';

import styles from './tile.module.css';

import { FreeText, H3 } from '../typography';
import { ButtonLink } from '../button';

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  aboveFold?: boolean,
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

export const Tile: FC<TileProps> = ({
  aboveFold,
  imgUrl,
  imgAlt,
  imgDimensions,
  title,
  hrefText,
  href,
  content,
}) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(shortid());
  }, []);

  return (
    <div className={styles['c-tile']}>

      <div className={styles['c-tile__image']}>
        <Image
          priority={aboveFold}
          src={imgUrl}
          alt={imgAlt}
          width={imgDimensions.width}
          height={imgDimensions.height}
          layout={'responsive'}
          objectFit={'cover'}
        />
      </div>


      <div className={styles['c-tile__content']}>
        <div className={styles['c-tile__head']} id={id}>
          <H3>{title}</H3>
        </div>

        <div className={styles['c-tile__body']}>
          <FreeText dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <div className={styles['c-tile__foot']}>
          <ButtonLink href={href} aria-describedby={id}>
            {hrefText}
          </ButtonLink>
        </div>
      </div>

    </div>
  );
};
