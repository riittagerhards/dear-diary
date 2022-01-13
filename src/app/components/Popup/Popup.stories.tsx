import Popup from './Popup';

export default {
  component: Popup,
  title: 'Components/Popup',
  parameters: {
    layout: 'centered',
  },
};

export const Default = (): JSX.Element => <Popup message={'You cannot add a day twice'}/>;