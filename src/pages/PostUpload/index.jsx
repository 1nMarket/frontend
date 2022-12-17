// import React, { useState } from 'react';
import { axiosImgUpload } from '../../apis/axios';

const PostUpload = () => {
  // const [imgFiles, setImgFiles] = useState([]);

  const handleImgUpload = async (e) => {
    const form = new FormData();

    for (let img of e.target.files) {
      form.append('image', img);
    }

    const response = await axiosImgUpload.post(
      '/image/uploadfiles',
      form
    );
    console.log(response);
  };

  return (
    <div>
      <label htmlFor='img' />
      <input
        id='img'
        type='file'
        accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
        multiple
        onChange={handleImgUpload}
      />
    </div>
  );
};

export default PostUpload;
