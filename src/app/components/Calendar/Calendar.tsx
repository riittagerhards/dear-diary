import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import './Calendar.styles.css';

function CalendarSummary(): JSX.Element {
  const minimumDate = {
    year: 2021,
    month: 1,
    day: 1,
  };

  return (
    <Calendar
      calendarClassName="calendar"
      calendarTodayClassName="today"
      minimumDate={minimumDate}
    />
  );
}

export default CalendarSummary;
