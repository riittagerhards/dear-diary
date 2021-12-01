import styles from './UploadImage.module.css';
//import Button from '../Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';

function UploadImage(): JSX.Element {
  const [imageSelected, setImageSelected] = useState<File | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    setImageSelected(event.target.files[0]);
    console.log(event.target.files[0]);
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
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={uploadCloudinary}>
      <input
        type="file"
        className={styles.imageUpload}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit" value="upload" />
    </form>
  );
}

export default UploadImage;
