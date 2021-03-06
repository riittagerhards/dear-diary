import styles from './UploadImage.module.css';
import UploadImageIcon from '../../components/UploadImage/UploadImageIcon';
import { ChangeEvent } from 'react';

type ImageUploadProps = {
  className?: string;
  onUpload: (url: string) => void;
};

function UploadImage({ onUpload, className }: ImageUploadProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];

    const key = import.meta.env.VITE_CLOUDINARY_UPLOAD as string;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', key);

    fetch('https://api.cloudinary.com/v1_1/rger/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => onUpload(result.url));
  };

  return (
    <div className={className}>
      <label className={styles.container}>
        <UploadImageIcon />
        <input
          type="file"
          className={styles.imageUpload}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default UploadImage;
