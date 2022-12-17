import { useState } from 'react';
import { axiosImgUpload } from '../../apis/axios';

const PostUpload = () => {
  const [imgFiles, setImgFiles] = useState([]);

  const handleImgUpload = async (e) => {
    if (imgFiles.length > 2) return window.alert('이미지는 세 개 이하로 업로드가 가능합니다!');
    const form = new FormData();
    form.append('image', e.target.files[0]);
    const { data } = await axiosImgUpload.post(
      '/image/uploadfile',
      form
    );
    
    setImgFiles((prev) => [...prev, `https://mandarin.api.weniv.co.kr/${data.filename}`]);
  };
  console.log(imgFiles);

  return (
    <div>
      <label htmlFor='img' />
      <input
        id='img'
        type='file'
        accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
        onChange={handleImgUpload}
      />
      {imgFiles.length && imgFiles.map((img, i) => (
        <img key={i} src={img} alt='' />
      ))}
    </div>
  );
};

export default PostUpload;
