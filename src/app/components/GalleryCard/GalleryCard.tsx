import styles from './GalleryCard.module.css';
import { MONTHS } from '../../utils/dateData';

type GalleryCardProps = {
  date: Date;
  src: string;
};

function GalleryCard({ date, src }: GalleryCardProps): JSX.Element {
  return (
    <article className={styles.container}>
      <span className={styles.dateContainer}>
        <p className={styles.dateDay}>{date.getDate()}</p>
        <p className={styles.dateMonth}>{MONTHS[date.getMonth()]}</p>
      </span>
      <img className={styles.image} src={src} alt="" />
    </article>
  );
}

export default GalleryCard;
