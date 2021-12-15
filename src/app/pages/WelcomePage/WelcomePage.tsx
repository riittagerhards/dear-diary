import WelcomePageIcon from '../../components/Welcome/WelcomePageIcon';
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';

function WelcomePage(): JSX.Element {
  return (
    <div className={styles.container}>
      <WelcomePageIcon className={styles.icon} />
      <div className={styles.inputContainer}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="My name"
          maxLength={12}
          onChange={(event) => localStorage.setItem('name', event.target.value)}
        />
        <Link to={'/home'} className={styles.enter}>
          Enter
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
