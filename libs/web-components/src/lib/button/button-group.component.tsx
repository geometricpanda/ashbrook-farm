import { FC } from 'react';
import style from './button.module.css';

export const ButtonGroup: FC = ({ children }) => (
  <div className={style['c-button-group']}>
    {children}
  </div>
);
