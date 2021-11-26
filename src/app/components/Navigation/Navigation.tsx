import { useState } from 'react';
import styles from './Navigation.module.css';

type headerTitleProps = {
  headerTitle: string;
};

function Navigation({ headerTitle }: headerTitleProps): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);

  function handleClick() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className={styles.container}>
      <h1 className={styles.headerTitle}>{headerTitle}</h1>
      <ul className={`${styles.navLinks} ${navOpen ? styles.navOpen : ''} `}>
        <li>
          <a className={styles.activeLink} href="">
            Home
          </a>
        </li>
        <li>
          <a className={styles.activeLink} href="">
            Add entry
          </a>
        </li>
        <li>
          <a className={styles.activeLink} href="">
            Gallery
          </a>
        </li>
        <li>
          <a className={styles.inactiveLink} href="">
            Profile
          </a>
        </li>
        <li>
          <a className={styles.inactiveLink} href="">
            Settings
          </a>
        </li>
      </ul>
      <div className={styles.burger} onClick={handleClick}>
        <div className={`${navOpen ? styles.lineOne : ''} `}></div>
        <div className={`${navOpen ? styles.lineTwo : ''} `}></div>
        <div className={`${navOpen ? styles.lineThree : ''} `}></div>
      </div>
    </nav>
  );
}

export default Navigation;
