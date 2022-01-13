import styles from './Popup.module.css';

type PopupProps = {
  message: string;
  onClick?: () => void;
};

function Popup({message, onClick}:PopupProps):JSX.Element {
    return (
     <div className={styles.container}>
       <div className={styles.popupBox}>
         <span className={styles.close} onClick={onClick}>x</span>
         {message}
     </div>
    </div>
    );
}

export default Popup;