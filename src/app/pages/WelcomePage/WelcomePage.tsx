import WelcomePageIcon from '../../components/Welcome/WelcomePageIcon.svg';
import { useState } from 'react';
import styles from './WelcomePage.module.css';
import Button from '../../components/Button/Button';

function WelcomePage(): JSX.Element {
  const [name, setName] = useState('');
  console.log(setName);

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={WelcomePageIcon} alt="" />
      <form className={styles.form}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="My name"
          value={name}
        ></input>
        <Button className={''} type={'submit'} value={'enter'} />
      </form>
    </div>
  );
}

export default WelcomePage;
