import WelcomePageIcon from '../../components/Welcome/WelcomePageIcon.svg';
import { FormEvent, useState } from 'react';
import styles from './WelcomePage.module.css';
import Button from '../../components/Button/Button';

function WelcomePage(): JSX.Element {
  const [name, setName] = useState('');

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
          value={name}
          maxLength={12}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <Button className={''} type={'submit'} value={'enter'} />
      </form>
    </div>
  );
}

export default WelcomePage;
