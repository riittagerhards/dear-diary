import styles from './UploadImage.module.css';
import UploadImageIcon from '../../components/UploadImage/UploadImageIcon.svg';
import Button from '../Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';

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
  };

  const uploadCloudinary = (event: FormEvent) => {
    event.preventDefault();
    if (!imageSelected) {
      return;
    }
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
      <form onSubmit={uploadCloudinary}>
        <label>
          <img src={UploadImageIcon} />
          <input
            type="file"
            className={styles.imageUpload}
            onChange={handleChange}
          />
        </label>
        <Button className={styles.button} type={'submit'} value={'upload'} />
      </form>
    </div>
  );
}

export default UploadImage;
