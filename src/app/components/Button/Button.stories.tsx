import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
};

export const Default = (): JSX.Element => (
  <Button className="" type="" value="enter" />
);
