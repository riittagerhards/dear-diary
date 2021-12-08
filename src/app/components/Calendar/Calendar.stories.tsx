import CalendarSummary from './Calendar';

export default {
  component: CalendarSummary,
  title: 'Components/Calendar',
  parameters: {
    layout: 'centered',
  },
};

export const Default = (): JSX.Element => <CalendarSummary className={''} />;
