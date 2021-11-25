import styles from './Navigation.module.css';

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Add entry</a>
        </li>
        <li>
          <a href="">Gallery</a>
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
