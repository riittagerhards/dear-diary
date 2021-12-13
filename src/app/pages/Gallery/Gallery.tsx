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

  const monthsLong = [
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

  const monthsTwoDigit = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  useEffect(() => {
    if (!entries) {
      return;
    }
    const formattedDateOptions = entries.map((entry) => {
      const date = new Date(entry.date);
      return `${monthsLong[date.getMonth()]} ${date.getFullYear()}`;
    });
    const uniqueDateOptions = [...new Set(formattedDateOptions)];
    setDateOptions(uniqueDateOptions);
  }, [entries]);

  const formattedDate = new Date(selectDate);
  const filterDate = `${formattedDate.getFullYear()}-${
    monthsTwoDigit[formattedDate.getMonth()]
  }`;

  const filteredEntries = entries?.filter((entry) =>
    entry.date.startsWith(filterDate)
  );

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
        {!selectDate &&
          entries?.map((entry) => (
            <Link
              key={entry.date}
              to={`/gallery/${entry.date}`}
              style={{ textDecoration: 'none' }}
            >
              <GalleryCard date={new Date(entry.date)} src={entry.imageUrl} />
            </Link>
          ))}
        {selectDate &&
          filteredEntries?.map((entry) => (
            <Link
              key={entry.date}
              to={`/gallery/${entry.date}`}
              style={{ textDecoration: 'none' }}
            >
              <GalleryCard
                key={entry.date}
                date={new Date(entry.date)}
                src={entry.imageUrl}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Gallery;
