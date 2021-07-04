import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './type.module.css';

interface TypeStyledProps<T> extends HTMLAttributes<T> {
  /* Configures margin-bottom */
  marginBottom?: boolean;
  /* Configures Size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /* Configures color */
  color?: 'primary' | 'secondary';
}

export interface TypeProps<T> extends TypeStyledProps<T> {
  element: 'h1' | 'h2' | 'p';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export const Type: FC<TypeProps<any>> = ({
  element: Element = 'p',
  color = 'primary',
  size = 'sm',
  marginBottom = false,
  children,
  ...props
}) => {
  const finalClassName = classnames({
    [styles['c-type']]: true,
    [styles['c-type--secondary']]: color === 'secondary',
    [styles['c-type--margin-bottom']]: marginBottom === true,
    [styles['c-type--size-md']]: size === 'md',
    [styles['c-type--size-lg']]: size === 'lg',
    [styles['c-type--size-xl']]: size === 'xl',
  });

  return (
    <Element className={finalClassName} {...props}>
      {children}
    </Element>
  );
};

export const H1: FC<TypeStyledProps<HTMLHeadingElement>> = (props) =>
  Type({
    ...props,
    element: 'h1',
    size: 'xl',
  });

export const H2: FC<TypeStyledProps<HTMLHeadingElement>> = (props) =>
  Type({
    ...props,
    element: 'h2',
    size: 'lg',
  });

export const H3: FC<TypeStyledProps<HTMLHeadingElement>> = (props) =>
  Type({
    ...props,
    element: 'h2',
    size: 'md',
  });

export const P: FC<TypeStyledProps<HTMLHeadingElement>> = (props) =>
  Type({
    ...props,
    element: 'p',
    size: 'sm',
  });
