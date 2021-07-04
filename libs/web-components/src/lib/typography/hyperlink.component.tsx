import { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';

import styles from './hyperlink.module.css';

interface HyperlinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const HyperLink: FC<HyperlinkProps> = ({ href, ...props }) => (
  <Link href={href}>
    <a className={styles['c-link']} {...props} />
  </Link>
);
