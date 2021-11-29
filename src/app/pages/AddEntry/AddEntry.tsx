import styles from './AddEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';

function AddEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navigation headerTitle={'How was your day?'} />
      <form></form>
      <Button className={styles.button} type={'submit'} value={'save'} />
    </div>
  );
}

export default AddEntry;
