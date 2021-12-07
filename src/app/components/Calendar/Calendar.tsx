import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import './Calendar.styles.css';
import useGetEntries from '../../utils/useGetEntries';

type CalendarProps = {
  className: string;
};

function CalendarSummary({ className }: CalendarProps): JSX.Element {
  const entries = useGetEntries();

  const selectedDates = entries?.map((entry) => {
    const date = new Date(entry.date);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      className: 'highlightedDays',
    };
  });

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
        customDaysClassName={selectedDates}
      />
    </div>
  );
}

export default CalendarSummary;
