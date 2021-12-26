import GalleryCard from './GalleryCard';

export default {
  component: GalleryCard,
  title: 'Components/GalleryCard',
};

export const Image = () => (
  <GalleryCard
    date={new Date(2012 - 12 - 0o3)}
    src="https://images.pexels.com/photos/64227/frosted-leaf-branch-frost-64227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  />
);

export const Text = () => (
  <GalleryCard
    date={new Date(2012 - 12 - 0o3)}
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ta."
  />
);
