import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosImgUpload, axiosPrivate } from '../../apis/axios';
import UploadHeader from '../../components/common/Header/UploadHeader';

const PostUpload = () => {
  const [content, setContent] = useState('');
  const [imgFiles, setImgFiles] = useState([]);
  const fileRef = useRef();
  const navigate = useNavigate();

  const canSave = !!imgFiles.length || !!content;

  const handleImgUpload = async (e) => {
    e.preventDefault();
    if (imgFiles.length > 2)
      return window.alert('이미지는 세 개 이하로 업로드가 가능합니다!');
    const form = new FormData();
    form.append('image', e.target.files[0]);
    const { data } = await axiosImgUpload.post('/image/uploadfile', form);

    setImgFiles((prev) => [
      ...prev,
      `https://mandarin.api.weniv.co.kr/${data.filename}`,
    ]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.post(
      '/post',
      JSON.stringify({
        post: {
          content,
          image: imgFiles.join(','),
        },
      }),
    );
    navigate('/home');
  };

  return (
    <>
      <UploadHeader canSave={canSave} handleUpload={handleUpload} />
      <main style={{ padding: '60px 0' }}>
        <form>
          <div>
            <label htmlFor='text' />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type='button' onClick={() => fileRef.current.click()}>
            이미지 업로드
          </button>
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
            <img key={i} src={img} alt='' width='50px' height='50px' />
          ))}
        </form>
      </main>
    </>
  );
};

export default PostUpload;
