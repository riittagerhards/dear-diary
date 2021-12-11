import styles from './UploadImage.module.css';
import UploadImageIcon from '../../components/UploadImage/UploadImageIcon';
import { ChangeEvent } from 'react';

type ImageUploadProps = {
  onUpload: (url: string) => void;
};

function UploadImage({ onUpload }: ImageUploadProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'bmnorbj6');

    fetch('https://api.cloudinary.com/v1_1/rger/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => onUpload(result.url));
  };

  return (
    <label className={styles.container}>
      <UploadImageIcon />
      <input
        type="file"
        className={styles.imageUpload}
        onChange={handleChange}
      />
    </label>
  );
}

export default UploadImage;
