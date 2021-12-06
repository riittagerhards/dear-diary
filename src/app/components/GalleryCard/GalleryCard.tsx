import styles from './GalleryCard.module.css';

type GalleryCardProps = {
  date: Date;
  src: string;
};

function GalleryCard({ date, src }: GalleryCardProps): JSX.Element {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  return (
    <div className={styles.container}>
      <span className={styles.dateContainer}>
        <p className={styles.dateDay}>{date.getDate()}</p>
        <p className={styles.dateMonth}>{months[date.getMonth()]}</p>
      </span>
      <img className={styles.image} src={src} alt="my picture of the day" />
    </div>
  );
}

export default GalleryCard;
