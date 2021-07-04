import { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './button.module.css';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  secondary?: boolean;
  icon?: boolean;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, icon, secondary, ...props }) => {
  const finalClassNames = classnames({
    [styles['c-button']]: true,
    [styles['c-button--icon']]: icon === true,
    [styles['c-button--secondary']]: secondary === true,
  });

  return (
    <Link href={href}>
      <a className={finalClassNames} {...props} />
    </Link>
  );
};
