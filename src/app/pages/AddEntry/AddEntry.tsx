import styles from './AddEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import UploadImage from '../../components/UploadImage/UploadImage';
import { useState } from 'react';

function AddEntry(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  let content;

  if (!imageUrl) {
    content = <UploadImage onUpload={setImageUrl} />;
  } else {
    content = <img src={imageUrl} />;
  }

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'How was your day?'} />
      {content}
      <form className={styles.form}>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="... add title ..."
          required
        />
        <input className={styles.dateInput} type="date" required></input>
        <input
          className={styles.textInput}
          type="text"
          placeholder="... add text ..."
        />
        <Button className={styles.button} type={'submit'} value={'save'} />
      </form>
    </div>
  );
}

export default AddEntry;
