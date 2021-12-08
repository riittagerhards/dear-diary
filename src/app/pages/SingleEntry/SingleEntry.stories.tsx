import SingleEntry from './SingleEntry';

export default {
  component: SingleEntry,
  title: 'Pages/SingleEntry',
};

export const Default = (): JSX.Element => (
  <SingleEntry
    headerTitle="December 8, 2021"
    src="https://images.pexels.com/photos/64227/frosted-leaf-branch-frost-64227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    entryTitle="Lorem ipsum dolor sit amet"
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
    rebum. Stet clita kasd gubergren, no sea ta."
  />
);
