import styles from './SingleEntry.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';

type SingleEntryProps = {
  headerTitle: string;
  src: string;
  entryTitle: string;
  text: string;
};

function SingleEntry({
  headerTitle,
  src,
  entryTitle,
  text,
}: SingleEntryProps): JSX.Element {
  return (
    <div>
      <Navigation headerTitle={headerTitle} />
      <div className={styles.container}>
        <img className={styles.image} src={src} alt="my picture of the day" />
        <h1>{entryTitle}</h1>
        <p className={styles.text}>{text}</p>
        <label className={styles.buttonContainer}>
          <Button type={'button'} name={'edit'} />
          <Button type={'submit'} name={'delete'} />
        </label>
      </div>
    </div>
  );
}

export default SingleEntry;
