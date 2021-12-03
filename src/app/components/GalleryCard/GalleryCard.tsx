import styles from './GalleryCard.module.css';

type GalleryCardProps = {
  day: string;
  month: string;
  src: string;
};

function GalleryCard({ day, month, src }: GalleryCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.dateContainer}>
        <p className={styles.dateDay}>{day}</p>
        <p className={styles.dateMonth}>{month}</p>
      </span>
      <img className={styles.image} src={src} alt="my picture of the day" />
    </div>
  );
}

export default GalleryCard;
