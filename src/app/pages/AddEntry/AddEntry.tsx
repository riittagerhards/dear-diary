import styles from './AddEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';

function AddEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navigation headerTitle={'How was your day?'} />
      <form className={styles.form}>
        <input
          className={styles.imageInput}
          type=""
          placeholder="add image"
        ></input>
        <input
          className={styles.dateInput}
          type=""
          placeholder="... set date ..."
        ></input>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="... add title ..."
        ></input>
        <input
          className={styles.textInput}
          type="text"
          placeholder="... add text ..."
        ></input>
        <Button className={styles.button} type={'submit'} value={'save'} />
      </form>
    </div>
  );
}

export default AddEntry;
