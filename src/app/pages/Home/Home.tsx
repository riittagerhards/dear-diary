import Navigation from '../../components/Navigation/Navigation';
import CalendarSummary from '../../components/Calendar/Calendar';
import AddNewEntryIcon from './AddNewEntryIcon.svg';
import styles from './Home.module.css';

function HomePage(): JSX.Element {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];

  return (
    <div className={styles.container}>
      <Navigation headerTitle={'Hello!'} className={styles.navigation} />
      <section className={styles.dateContainer}>
        <div className={styles.date}>
          {day} {month}
        </div>
        <img src={AddNewEntryIcon} className={styles.icon} />
      </section>
      <CalendarSummary className={styles.calendar} />
    </div>
  );
}

export default HomePage;
