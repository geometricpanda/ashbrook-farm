import { FC } from 'react';
import styles from './header.module.css';
import { Logo } from './logo';

const Header: FC = ({children}) => {
  return (
    <header className={styles['c-header']}>
      <div className={styles['c-header__logo']}>
        <Logo className={styles['c-header__logo-img']} />
        <h1 className={styles['c-header__logo-wordmark']}>Ashbrook Farm</h1>
      </div>
      <div className={styles['c-header__links']}>
        {children}
      </div>
    </header>
  );
};

export default Header;
