import { FC, ReactNode } from 'react';

import classnames from 'classnames';

import styles from './section.module.css';

interface SectionProps {
  secondary?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  paddingTop?: boolean;
}

export const Section: FC<SectionProps> = ({ children, secondary, header, footer, paddingTop = true }) => {

  const finalClassNames = classnames({
    [styles['c-section']]: true,
    [styles['c-section--secondary']]: secondary === true,
    [styles['c-section--no-padding-top']]: paddingTop === false
  });

  return (
    <section className={finalClassNames}>

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

