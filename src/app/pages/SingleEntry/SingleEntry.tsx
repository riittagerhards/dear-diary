import styles from './SingleEntry.module.css';
import Navigation from '../../components/Navigation/Navigation';
import useDeleteEntry from '../../utils/useDeleteEntry';
import EmptyIcon from './EmptyIcon';
import { Link, useParams } from 'react-router-dom';
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
    const response = await fetch(`/api/entries/${date}`);
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

  const params = useParams();
  const deleteDate = params.date;
  const deleteEntry = useDeleteEntry(deleteDate);

  async function handleClick() {
    try {
      await deleteEntry();
    } catch (error) {
      console.log(error);
    }
    setEntry(null);
  }

  return (
    <div>
      {entry ? (
        <Navigation headerTitle={getDate(entry.date)} />
      ) : (
        <Navigation headerTitle="Tabula rasa" />
      )}
      {entry ? (
        <div className={styles.container}>
          <img className={styles.image} src={entry.imageUrl} alt="" />
          <h1>{entry.title}</h1>
          <p className={styles.text}>{entry.text}</p>
          <div className={styles.delete} onClick={() => handleClick()}>
            delete
          </div>
        </div>
      ) : (
        <article className={styles.empty}>
          <EmptyIcon />
          Sorry, nothing to show here!
          <Link to={'/add'} className={styles.link}>
            Do you want to add something?
          </Link>
        </article>
      )}
    </div>
  );
}

export default SingleEntry;
