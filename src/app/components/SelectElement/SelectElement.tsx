import styles from './SelectElement.module.css';

function SelectElement(): JSX.Element {
  return (
    <select className={styles.select}>
      <option>Select month</option>
    </select>
  );
}

export default SelectElement;
