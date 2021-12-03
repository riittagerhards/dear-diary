import styles from './GalleryCard.module.css';

function GalleryCard(): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.dateContainer}>
        <p className={styles.dateDay}>03</p>
        <p className={styles.dateMonth}>DEZ</p>
      </span>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/64227/frosted-leaf-branch-frost-64227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="my picture of the day"
      />
    </div>
  );
}

export default GalleryCard;
