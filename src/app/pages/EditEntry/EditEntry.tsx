import styles from './EditEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import UploadImage from '../../components/UploadImage/UploadImage';
import useEditEntry from '../../utils/useEditEntry';
import { FormEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type SingleEntryProps = {
  imageUrl: string;
  date: string;
  title: string;
  text: string;
};

function EditEntry(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>('');
  //const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { date } = useParams();
  const [entry, setEntry] = useState<SingleEntryProps | null>();
  const params = useParams();
  const editDate = params.date;
  const editEntry = useEditEntry(editDate);

  let content;
  if (!imageUrl) {
    content = <UploadImage onUpload={setImageUrl} />;
  } else {
    content = <img src={imageUrl} className={styles.image} />;
  }

  const getEntries = async () => {
    const response = await fetch(`/api/entries/${date}`);
    const entry = await response.json();
    setEntry(entry);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const newEntry = {
      imageUrl,
      title,
      date,
      text,
    };

    try {
      await editEntry(newEntry);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      navigate('/gallery');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'Make some changes!'} />
      <form className={styles.form} onSubmit={handleSubmit}>
        {content}
        <input
          className={styles.titleInput}
          type="text"
          value={entry?.title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <input
          className={styles.dateInput}
          type="date"
          value={entry?.date}
          // onChange={(event) => setDate(event.target.value)}
          required
        />
        <textarea
          className={styles.textInput}
          maxLength={250}
          rows={7}
          value={entry?.text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button className={styles.button} type={'submit'} name={'Save'} />
      </form>
    </div>
  );
}

export default EditEntry;
