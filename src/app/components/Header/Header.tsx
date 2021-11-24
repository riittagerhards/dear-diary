import styles from './Header.module.css';
import NavigationIcon from '../assets/NavigationIcon.svg';

type headerTitleProps = {
  headerTitle: string;
};

function Header({ headerTitle }: headerTitleProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>{headerTitle}</h1>
      <img src={NavigationIcon} className={styles.navigationIcon} />
    </div>
  );
}

export default Header;
