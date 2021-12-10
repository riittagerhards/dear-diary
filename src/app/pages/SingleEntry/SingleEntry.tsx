import styles from './SingleEntry.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

type SingleEntryProps = {
  imageUrl: string;
  date: string;
  title: string;
  text: string;
};

function SingleEntry(): JSX.Element {
  const { date } = useParams();
  const [entry, setEntry] = useState<SingleEntryProps | null>();

  const getEntries = async () => {
    const response = await fetch(`/api/entries/${date}/`);
    const entry = await response.json();
    setEntry(entry);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const getDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    const entryDate = dateObject.toLocaleDateString('en-US', options);
    return entryDate;
  };

  return (
    <div>
      {entry && <Navigation headerTitle={getDate(entry.date)} />}
      <div className={styles.container}>
        {entry && (
          <img
            className={styles.image}
            src={entry.imageUrl}
            alt="my picture of the day"
          />
        )}
        {entry && <h1>{entry.title}</h1>}
        {entry && <p className={styles.text}>{entry.text}</p>}
        <div className={styles.buttonContainer}>
          <Button type={'button'} name={'edit'} />
          <Button type={'submit'} name={'delete'} />
        </div>
      </div>
    </div>
  );
}

export default SingleEntry;
