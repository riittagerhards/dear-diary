import styles from './EditEntry.module.css';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';
import UploadImage from '../../components/UploadImage/UploadImage';
import useEditEntry from '../../utils/useEditEntry';
import EmptyIcon from '../SingleEntry/EmptyIcon';
import { FormEvent, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

type SingleEntryProps = {
  imageUrl: string;
  newDate: string;
  title: string;
  text: string;
};

function EditEntry(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { date } = useParams();
  const [entry, setEntry] = useState<SingleEntryProps | null>();
  const params = useParams();
  const editDate = params.date;
  const editEntry = useEditEntry(editDate);

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
    }, 500);
  };

  return (
    <div className={styles.container}>
      {entry ? (
        <Navigation headerTitle={'Make some changes!'} />
      ) : (
        <Navigation headerTitle={'Blank space'} />
      )}
      {entry ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          {imageUrl ? (
            <img src={imageUrl} className={styles.image} />
          ) : (
            <span className={styles.imageContainer}>
              <img src={entry?.imageUrl} className={styles.image} />
              <UploadImage onUpload={setImageUrl} />
            </span>
          )}
          <input
            className={styles.titleInput}
            type="text"
            placeholder={entry?.title}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <input
            className={styles.dateInput}
            type="date"
            value={date}
            readOnly
          />
          <textarea
            className={styles.textInput}
            maxLength={250}
            rows={7}
            value={text}
            placeholder={entry?.text}
            onChange={(event) => setText(event.target.value)}
          />
          <Button className={styles.button} type={'submit'} name={'Save'} />
        </form>
      ) : (
        <article className={styles.empty}>
          <EmptyIcon />
          Sorry, nothing to edit here!
          <Link to={'/add'} className={styles.link}>
            Do you want to add something?
          </Link>
        </article>
      )}
    </div>
  );
}

export default EditEntry;
