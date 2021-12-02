import styles from './Button.module.css';

type ButtonProps = {
  className?: string;
  type: string;
  value: string;
  onClick?: () => void;
};

function Button({ type, value, onClick }: ButtonProps): JSX.Element {
  return (
    <input
      className={styles.button}
      type={type}
      value={value}
      onClick={onClick}
    ></input>
  );
}

export default Button;
