import styles from './SingleEntry.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';

function SingleEntry(): JSX.Element {
  return (
    <div>
      <Navigation headerTitle={'December 8, 2021'} />
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://images.pexels.com/photos/64227/frosted-leaf-branch-frost-64227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="my picture of the day"
        />
        <h1>Title</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam volu.
        </p>
        <label className={styles.buttonContainer}>
          <Button type={'button'} name={'edit'} />
          <Button type={'submit'} name={'delete'} />
        </label>
      </div>
    </div>
  );
}

export default SingleEntry;
