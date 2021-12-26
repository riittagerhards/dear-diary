import styles from './GalleryCard.module.css';
import { MONTHS } from '../../utils/dateData';

type GalleryCardProps = {
  date: Date;
  src?: string;
  text?: string;
};

function GalleryCard({ date, src, text }: GalleryCardProps): JSX.Element {
  const imageSource = src;
  return (
    <article className={styles.container}>
      <span className={styles.dateContainer}>
        <p className={styles.dateDay}>{date.getDate()}</p>
        <p className={styles.dateMonth}>{MONTHS[date.getMonth()]}</p>
      </span>
      {!imageSource && (
        <p className={styles.text}>{`${text?.substring(0, 120)}...`}</p>
      )}
      {imageSource && <img className={styles.image} src={src} alt="" />}
    </article>
  );
}

export default GalleryCard;
