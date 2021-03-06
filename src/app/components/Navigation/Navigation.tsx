import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

type headerTitleProps = {
  headerTitle: string;
  className?: string;
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
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/add">
            Add entry
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/gallery">
            Gallery
          </Link>
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
