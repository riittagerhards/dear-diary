import styles from './GalleryCard.module.css';

type GalleryCardProps = {
  date: Date;
  src: string;
};

function GalleryCard({ date, src }: GalleryCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.dateContainer}>
        <p className={styles.dateDay}>{date.getDate()}</p>
        <p className={styles.dateMonth}>{date.getMonth()}</p>
      </span>
      <img className={styles.image} src={src} alt="my picture of the day" />
    </div>
  );
}

export default GalleryCard;
