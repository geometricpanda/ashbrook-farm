import { FC, ReactNode } from 'react';

import classnames from 'classnames';

import styles from './section.module.css';

interface SectionProps {
  header?: ReactNode;
  footer?: ReactNode;
}

export const Section: FC<SectionProps> = ({ children, header, footer }) => {

  return (
    <section className={styles['c-section']}>

      {header && (
        <div className={classnames(styles['c-section__content'], styles['c-section__content--header'])}>
          {header}
        </div>
      )}

      <div className={classnames(styles['c-section__content'])}>
        {children}
      </div>


      {footer && (
        <div className={classnames(styles['c-section__content'], styles['c-section__content--footer'])}>
          {footer}
        </div>
      )}

    </section>
  );

};

