import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './free-text.module.css';

interface FreeTextProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary';
}

export const FreeText: FC<FreeTextProps> = ({ children, dangerouslySetInnerHTML, color }) => {
  const finalClassNames = classnames({
    [styles['c-free-text']]: true,
    [styles['c-free-text--secondary']]: color === 'secondary',
  });
  return (
    <div className={finalClassNames} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
      {children}
    </div>
  )
};
