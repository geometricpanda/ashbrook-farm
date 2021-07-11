import { FC } from 'react';
import Image from 'next/image';

import styles from './hero.module.css';

interface HeroProps {
  image: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    copyright: string;
    url: string;
  };
}

export const Hero: FC<HeroProps> = ({ image }) => {
  return (
    <div className={styles['c-hero']}>
      <div className={styles['c-hero__inner']}>
        <Image
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
          className={styles['c-hero__img']}
          layout='responsive'
          priority={true}
        />
      </div>
    </div>
  );
};
