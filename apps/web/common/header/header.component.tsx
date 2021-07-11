import { FC, useCallback, useState } from 'react';
import styles from './header.module.css';
import { Logo } from './logo';
import classnames from 'classnames';

const Header: FC = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleClassName = classnames({
    [styles['c-header__toggle']]: true,
    [styles['c-header__toggle--expanded']]: expanded,
  });

  const navClassName = classnames({
    [styles['c-header__nav']]: true,
    [styles['c-header__nav--expanded']]: expanded,
  });

  const doToggle = useCallback(() => {
    expanded ? setExpanded(false) : setExpanded(true);
  }, [expanded]);

  return (
    <header className={styles['c-header']}>
      <div className={styles['c-header__logo']}>
        <Logo className={styles['c-header__logo-img']} />
        <h1 className={styles['c-header__logo-wordmark']}>Ashbrook Farm</h1>
      </div>

      <div className={styles['c-header__links']}>
        <button
          id={'header-links-toggle'}
          className={toggleClassName}
          aria-expanded={expanded}
          aria-label="Toggle Navigation"
          aria-controls={'header-links'}
          onClick={doToggle}
        >
          <span className={styles['c-header__toggle-inner']}>
            <span
              className={classnames([
                styles['c-header__toggle-layer'],
                styles['c-header__toggle-layer--top'],
              ])}
            />
            <span
              className={classnames([
                styles['c-header__toggle-layer'],
                styles['c-header__toggle-layer--middle'],
              ])}
            />
            <span
              className={classnames([
                styles['c-header__toggle-layer'],
                styles['c-header__toggle-layer--bottom'],
              ])}
            />
          </span>
        </button>

        <nav className={navClassName} id="header-links" aria-label="Navigation">
          {children}
        </nav>
      </div>
    </header>
  );
};

export default Header;
