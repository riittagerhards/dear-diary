import WelcomePageIcon from '../../components/Welcome/WelcomePageIcon.svg';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import Button from '../../components/Button/Button';

function WelcomePage(): JSX.Element {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={WelcomePageIcon} alt="dear diary" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="My name"
          maxLength={12}
          onChange={(event) => localStorage.setItem('name', event.target.value)}
        ></input>
        <Link to={'/home'}>
          <Button type={'submit'} name={'Enter'} />
        </Link>
      </form>
    </div>
  );
}

export default WelcomePage;
