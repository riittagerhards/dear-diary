import Navigation from '../../components/Navigation/Navigation';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import useGetEntries from '../../utils/useGetEntries';
import styles from './Gallery.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery(): JSX.Element {
  const entries = useGetEntries();
  const [selectDate, setSelectDate] = useState('');
  const [dateOptions, setDateOptions] = useState<string[] | null>(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    if (!entries) {
      return;
    }
    const formattedDateOptions = entries.map((entry) => {
      const date = new Date(entry.date);
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    });
    const uniqueDateOptions = [...new Set(formattedDateOptions)];
    setDateOptions(uniqueDateOptions);
  }, [entries]);

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'Gallery'} />
      <select
        className={styles.select}
        onChange={(event) => setSelectDate(event.target.value)}
        value={selectDate}
      >
        <option>Select Month</option>
        {dateOptions &&
          dateOptions.map((entry) => {
            return <option key={entry}>{entry}</option>;
          })}
      </select>
      <div>
        {entries?.length === 0 && (
          <span>I&apos;m sorry, nothing to show here</span>
        )}
        {entries?.map((entry) => (
          <Link
            key={entry.date}
            to={`/gallery/${entry.date}`}
            style={{ textDecoration: 'none' }}
          >
            <GalleryCard date={new Date(entry.date)} src={entry.imageUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
