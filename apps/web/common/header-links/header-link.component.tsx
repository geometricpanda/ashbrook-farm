import { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import styles from './header-link.module.css';
import { useRouter } from 'next/router';

interface HeaderLinkProps {
  href: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const { asPath } = router;

  const isActive = (href === '/')
    ? (asPath === href)
    : asPath.includes(href);

  const className = classnames({
    [styles['c-header-link']]: true,
    [styles['c-header-link--active']]: isActive,
  });

  return (
    <Link href={href} passHref={true}>
      <a className={className}>
        <span className={styles['c-header-link__inner']}>{children}</span>
      </a>
    </Link>
  );
};

export default HeaderLink;
