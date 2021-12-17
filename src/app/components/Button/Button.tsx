import styles from './Button.module.css';

type ButtonProps = {
  className?: string;
  type: 'button' | 'submit';
  name: string;
  onClick?: () => void;
};

function Button({ type, name, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
