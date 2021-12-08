import WelcomePageIcon from '../../components/Welcome/WelcomePageIcon.svg';
import { FormEvent } from 'react';
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
          placeholder="my name"
          maxLength={12}
          onChange={(event) => localStorage.setItem('name', event.target.value)}
        ></input>
        <Button type={'submit'} name={'enter'} />
      </form>
    </div>
  );
}

export default WelcomePage;
