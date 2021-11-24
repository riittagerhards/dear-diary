import styles from './Header.module.css';
import NavigationIcon from '../Navigation/NavigationIcon.svg';

function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>How was your day?</h1>
      <img src={NavigationIcon} className={styles.navigationIcon} />
    </div>
  );
}

export default Header;
