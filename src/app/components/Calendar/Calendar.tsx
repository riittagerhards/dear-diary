import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import './Calendar.styles.css';
import useGetEntries from '../../utils/useGetEntries';
import { useState } from 'react';

type CalendarProps = {
  className: string;
};

function CalendarSummary({ className }: CalendarProps): JSX.Element {
  const [entryDays, setEntryDays] = useState([]);

  const entries = useGetEntries();

  const selectedDates = entries?.map((entry) => {
    const date = new Date(entry.date);
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };
  });

  console.log(selectedDates);

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
        value={entryDays}
      />
    </div>
  );
}

export default CalendarSummary;
