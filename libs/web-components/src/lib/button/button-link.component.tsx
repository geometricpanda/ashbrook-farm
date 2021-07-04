import { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Icon } from '@iconify/react';
import baselineChevronLeft from '@iconify/icons-ic/baseline-chevron-left';

import styles from './button.module.css';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  secondary?: boolean;
  icon?: typeof baselineChevronLeft;
  reverse?: boolean;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  children,
  icon,
  reverse,
  secondary,
  ...props
}) => {
  const finalClassNames = classnames({
    [styles['c-button']]: true,
    [styles['c-button--icon']]: icon,
    [styles['c-button--icon-reverse']]: reverse,
    [styles['c-button--secondary']]: secondary === true,
  });

  return (
    <Link href={href}>
      <a className={finalClassNames} {...props}>
        {icon && (
          <span className={styles['c-button__icon']} aria-hidden>
            <Icon icon={icon} width={'100%'} height={'100%'} />
          </span>
        )}

        <span className={styles['c-button__text']}>{children}</span>
      </a>
    </Link>
  );
};
