import styles from './Navigation.module.css';

function Navigation(): JSX.Element {
  return (
    <nav className={styles.container}>
      <ul className={styles.navLinks}>
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
      <div className={styles.burger}>
        <div className={styles.lineOne}></div>
        <div className={styles.lineTwo}></div>
        <div className={styles.lineThree}></div>
      </div>
    </nav>
  );
}

export default Navigation;
