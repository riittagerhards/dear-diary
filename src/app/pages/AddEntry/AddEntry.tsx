import styles from './AddEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import UploadImageIcon from '../../components/UploadImage/UploadImageIcon.svg';

function AddEntry(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navigation headerTitle={'How was your day?'} />
      <form className={styles.form}>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="... add title ..."
          required
        / >
        <label className={styles.imageUpload}>
          <img src={UploadImageIcon} />
          <input
            className={styles.imageInput}
            type="file"
            accept="image/*"
          ></input>
        </label>
        <input className={styles.dateInput} type="date" required></input>
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
