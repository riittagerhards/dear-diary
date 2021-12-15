import styles from './SingleEntry.module.css';
import Navigation from '../../components/Navigation/Navigation';
import useDeleteEntry from '../../utils/useDeleteEntry';
import { useNavigate, useParams } from 'react-router-dom';
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

  const navigate = useNavigate();
  const params = useParams();
  const deleteDate = params.date;
  const deleteEntry = useDeleteEntry(deleteDate);

  async function handleClick() {
    try {
      await deleteEntry();
    } catch (error) {
      console.log(error);
    }
    navigate('/gallery');
  }

  return (
    <div>
      {entry && <Navigation headerTitle={getDate(entry.date)} />}
      <div className={styles.container}>
        {entry && <img className={styles.image} src={entry.imageUrl} alt="" />}
        {entry && <h1>{entry.title}</h1>}
        {entry && <p className={styles.text}>{entry.text}</p>}
        <div className={styles.delete} onClick={() => handleClick()}>
          delete
        </div>
      </div>
    </div>
  );
}

export default SingleEntry;
