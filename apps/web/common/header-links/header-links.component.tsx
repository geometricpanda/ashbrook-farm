import { FC } from 'react';
import styles from './header-links.module.css';

const HeaderLinks: FC = ({ children }) => (
  <nav className={styles['c-header-links']}>
    {children}
  </nav>
);

export default HeaderLinks;
