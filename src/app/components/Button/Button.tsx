import styles from './Button.module.css';

type ButtonProps = {
  className: string;
  type: string;
  value: string;
};

function Button({ type, value }: ButtonProps): JSX.Element {
  return <input className={styles.button} type={type} value={value}></input>;
}

export default Button;
