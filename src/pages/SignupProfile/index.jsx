import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UserProfileForm from '../../components/user/UserProfileForm';
import { axiosPrivate } from '../../apis/axios';

const SignupProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://mandarin.api.weniv.co.kr/1671431659709.png',
  );
  const [canSignup, setCanSignup] = useState(false);

  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  const handleUserSignup = async (e) => {
    e.preventDefault();
    if (!canSignup) return;
    await axiosPrivate.post(
      '/user',
      JSON.stringify({
        user: {
          username,
          email: state?.email,
          password: state?.password,
          accountname,
          intro,
          image: profileImg,
        },
      }),
    );
    navigate('/login');
  };

  return (
    <>
      <section>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <UserProfileForm
          canSignup={canSignup}
          setCanSignup={setCanSignup}
          handleUserSignup={handleUserSignup}
          username={username}
          setUsername={setUsername}
          accountname={accountname}
          setAccountname={setAccountname}
          intro={intro}
          setIntro={setIntro}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
        />
        <button disabled={!canSignup} onClick={handleUserSignup}>
          1n마켓 시작하기
        </button>
      </section>
    </>
  );
};

export default SignupProfile;
