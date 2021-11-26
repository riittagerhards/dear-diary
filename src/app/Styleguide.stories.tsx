import Styleguide from './Styleguide';

export default {
  component: Styleguide,
  title: 'Styleguide',
  parameters: {
    layout: 'centered',
  },
};

export const Default = (): JSX.Element => <Styleguide />;
