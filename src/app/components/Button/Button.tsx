import styles from './Button.module.css';

type ButtonProps = {
  className?: string;
  type: 'button' | 'submit';
  name: string;
};

function Button({ type, name }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} type={type}>
      {name}
    </button>
  );
}

export default Button;
