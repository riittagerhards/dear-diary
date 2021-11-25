import styles from './Header.module.css';

type headerTitleProps = {
  headerTitle: string;
};

function Header({ headerTitle }: headerTitleProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>{headerTitle}</h1>
    </div>
  );
}

export default Header;
