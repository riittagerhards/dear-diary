import ImageUpload from './UploadImage';

export default {
  component: ImageUpload,
  title: 'Components/ImageUpload',
  parameters: {
    layout: 'centered',
  },
};

export const Default = (): JSX.Element => <ImageUpload onUpload={alert} />;
