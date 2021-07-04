import { ButtonHTMLAttributes, FC } from 'react';

import styles from './button.module.css';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button className={styles['c-button']} {...props}>
    {children}
  </button>
);
