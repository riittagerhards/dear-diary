import Navigation from '../../components/Navigation/Navigation';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import useGetEntries from '../../utils/useGetEntries';
import styles from './Gallery.module.css';
import { useState } from 'react';

function Gallery(): JSX.Element {
  const entries = useGetEntries();
  const [selectDate, setSelectDate] = useState([]);

  const handleChange = (event) => {
    setSelectDate(event.target.value);
  };

  const dateOptions = entries?.map((entry) => (
    <option key={entry.date}>{entry.date}</option>
  ));

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'Gallery'} />
      <select
        className={styles.select}
        onChange={handleChange}
        value={selectDate}
      >
        <option>Select Month</option>
        {dateOptions}
      </select>
      <div>
        {entries?.length === 0 && (
          <span>I&apos;m sorry, nothing to show here</span>
        )}
        {entries?.map((entry) => (
          <GalleryCard
            key={entry.date}
            date={new Date(entry.date)}
            src={entry.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
