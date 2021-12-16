import Navigation from '../../components/Navigation/Navigation';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import Button from '../../components/Button/Button';
import ToTopIcon from './ToTopIcon';
import useGetEntries from '../../utils/useGetEntries';
import styles from './Gallery.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { monthsLong, monthsTwoDigit } from '../../utils/dateData';

function Gallery(): JSX.Element {
  const entries = useGetEntries();
  const [selectDate, setSelectDate] = useState('');
  const [dateOptions, setDateOptions] = useState<string[] | null>(null);

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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'Gallery'} />
      <div className={styles.selectContainer}>
        <select
          className={styles.select}
          onChange={(event) => setSelectDate(event.target.value)}
          value={selectDate}
        >
          <option>Select Month</option>
          {dateOptions?.map((entry) => {
            return <option key={entry}>{entry}</option>;
          })}
        </select>
        <Button
          name="Show all"
          type="button"
          onClick={() => setSelectDate('')}
        />
      </div>
      <div>
        {entries?.length === 0 && (
          <span>I&apos;m sorry, nothing to show here</span>
        )}
        {!selectDate &&
          entries?.map((entry) => (
            <Link key={entry.date} to={`/gallery/${entry.date}`}>
              <GalleryCard date={new Date(entry.date)} src={entry.imageUrl} />
            </Link>
          ))}
        {selectDate &&
          filteredEntries?.map((entry) => (
            <Link key={entry.date} to={`/gallery/${entry.date}`}>
              <GalleryCard
                key={entry.date}
                date={new Date(entry.date)}
                src={entry.imageUrl}
              />
            </Link>
          ))}
      </div>
      <ToTopIcon className={styles.icon} onClick={handleClick} />
    </div>
  );
}

export default Gallery;
