import { useState, useRef } from 'react';
import { axiosImgUpload } from '../../apis/axios';

const PostUpload = () => {
  const [imgFiles, setImgFiles] = useState([]);
  const fileRef = useRef();

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

  return (
    <div>
      <button onClick={() => fileRef.current.click()}>이미지 업로드</button>
      <label htmlFor='img' />
      <input
        style={{ display: 'none' }}
        ref={fileRef}
        id='img'
        type='file'
        accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
        onChange={handleImgUpload}
      />
      {imgFiles?.map((img, i) => (
        <img key={i} src={img} alt='' />
      ))}
    </div>
  );
};

export default PostUpload;
