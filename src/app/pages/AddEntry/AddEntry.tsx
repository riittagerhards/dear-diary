import styles from './AddEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import UploadImage from '../../components/UploadImage/UploadImage';
import usePostEntry from '../../utils/usePostEntry';
import { FormEvent, useState } from 'react';

function AddEntry(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { postEntry } = usePostEntry();
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  let content;
  if (!imageUrl) {
    content = <UploadImage onUpload={setImageUrl} />;
  } else {
    content = <img src={imageUrl} className={styles.image} />;
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const entry = {
      imageUrl,
      title,
      date,
      text,
    };

    await postEntry(entry);

    setImageUrl(null);
    setTitle('');
    setDate('');
    setText('');
  };

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'How was your day?'} />
      <form className={styles.form} onSubmit={handleSubmit}>
        {content}
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Give your day a title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <input
          className={styles.dateInput}
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
        <textarea
          className={styles.textInput}
          placeholder="Place for your text"
          maxLength={250}
          rows={7}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button className={styles.button} type={'submit'} name={'Save'} />
      </form>
    </div>
  );
}

export default AddEntry;
