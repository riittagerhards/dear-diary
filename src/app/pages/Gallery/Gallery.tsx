import Navigation from '../../components/Navigation/Navigation';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import useGetEntries from '../../utils/useGetEntries';
import styles from './Gallery.module.css';

function Gallery(): JSX.Element {
  const entries = useGetEntries();

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'Gallery'} />
      <select className={styles.select}>
        <option>Select Month</option>
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
