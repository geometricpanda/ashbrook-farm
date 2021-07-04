import { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';

import styles from './button.module.css';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, ...props }) => (
  <Link href={href}>
    <a className={styles['c-button']} {...props} />
  </Link>
);
