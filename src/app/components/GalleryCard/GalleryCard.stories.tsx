import GalleryCard from './GalleryCard';

export default {
  component: GalleryCard,
  title: 'Components/GalleryCard',
};

export const Default = () => (
  <GalleryCard
    day="03"
    month="DEZ"
    src="https://images.pexels.com/photos/64227/frosted-leaf-branch-frost-64227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  />
);
