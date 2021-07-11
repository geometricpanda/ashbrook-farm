import { Children, FC } from 'react';
import styles from './header-links.module.css';

const HeaderLinks: FC = ({ children }) => (
  <ul className={styles['c-header-links']}>
    {Children.map(children, (child) => (
      <li className={styles['c-header-links__item']}>{child}</li>
    ))}
  </ul>
);

export default HeaderLinks;
