import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import './Calendar.styles.css';

type CalendarProps = {
  className: string;
};

function CalendarSummary({ className }: CalendarProps): JSX.Element {
  const minimumDate = {
    year: 2021,
    month: 1,
    day: 1,
  };

  return (
    <div className={className}>
      <Calendar
        calendarClassName="calendar"
        calendarTodayClassName="today"
        minimumDate={minimumDate}
      />
    </div>
  );
}

export default CalendarSummary;
