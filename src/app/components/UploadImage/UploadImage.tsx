import styles from './UploadImage.module.css';
import UploadImageIcon from '../../components/UploadImage/UploadImageIcon.svg';
import { ChangeEvent, useState } from 'react';

type ImageUploadProps = {
  onUpload: (url: string) => void;
};

function UploadImage({ onUpload }: ImageUploadProps): JSX.Element {
  const [imageSelected, setImageSelected] = useState<File | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    setImageSelected(event.target.files[0]);

    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'bmnorbj6');

    fetch('https://api.cloudinary.com/v1_1/rger/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => onUpload(result.url));
  };

  return (
    <div className={styles.container}>
      <label>
        <img src={UploadImageIcon} />
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
