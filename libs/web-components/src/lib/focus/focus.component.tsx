import { FC, HTMLProps, useEffect, useRef } from 'react';
import styles from './focus.module.css';

export const Focus: FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => ref.current && ref.current.focus(), 100);
  }, [ref]);

  return (
    <div className={styles['c-focus']} tabIndex={1} ref={ref} {...props} />
  );
};
