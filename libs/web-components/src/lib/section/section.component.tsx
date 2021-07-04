import { FC } from 'react';
import { H1 } from '../typography';

import classnames from 'classnames';

import styles from './section.module.css';

interface SectionProps {
  secondary?: boolean;
  title?: string;
  paddingTop?: boolean;
}

export const Section: FC<SectionProps> = ({ children, secondary, title, paddingTop = true }) => {

  const finalClassNames = classnames({
    [styles['c-section']]: true,
    [styles['c-section--secondary']]: secondary === true,
    [styles['c-section--no-padding-top']]: paddingTop === false
  });

  return (
    <section className={finalClassNames}>

      {title && (
        <div className={classnames(styles['c-section__content'], styles['c-section__content--title'])}>
          <H1>{title}</H1>
        </div>
      )}

      <div className={classnames(styles['c-section__content'])}>
        {children}
      </div>
    </section>
  );

};
