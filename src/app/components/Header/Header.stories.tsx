import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
};

export const Home = (): JSX.Element => <Header headerTitle="Hello, Riitta!" />;

export const Add = (): JSX.Element => (
  <Header headerTitle="How was your day?" />
);

export const Gallery = (): JSX.Element => <Header headerTitle="Gallery" />;

export const Entry = (): JSX.Element => <Header headerTitle="01.07.2021" />;
