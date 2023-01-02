# 1인마켓

## 주요기능

### SEO 최적화

<details>
  <summary>useTitle로 페이지 타이틀 최적화</summary>

각 페이지의 타이틀을 짓기 위해서 고민해서 다음과 같이 useTitle 훅을 만들어 해결했다.

```js
import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
};

export default useTitle;
```

<img width="1130" alt="스크린샷 2023-01-02 오후 2 07 45" src="https://user-images.githubusercontent.com/97153666/210196657-b1443ad9-6e22-441c-a7ca-795428e2bc48.png">

</details>

<details>
  <summary>ObserverIntersection Api 통해서 피드 무한스크롤 구현</summary>
</details>

## 트러블 슈팅

<details>
  <summary>useDebounce 사용해서 검색 최적화하기</summary>

한 글자만 쳐도 검색되는 문제 발견. 필요없는 요청이 많아진다.

<img width="1656" alt="스크린샷 2023-01-02 오후 2 15 55" src="https://user-images.githubusercontent.com/97153666/210197695-9f83b85e-c657-44ae-abbe-d9ced33d1aec.png">

#### useDebounce 커스텀 훅

```js
// hooks/useDebounce.js
import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
```

#### useDbounce 훅 적용

```jsx
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const debouncedValue = useDebounce(keyword);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!keyword.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(
        `/user/searchuser/?keyword=${keyword}`,
      );
      setSearchList(data);
    };
    searchUsers();
  }, [debouncedValue]);

  return (
    <>
      <SearchHeader setKeyword={setKeyword} />
      <S.Content>
        <SearchList searchList={searchList} />
      </S.Content>
    </>
  );
};
```

<img width="1583" alt="스크린샷 2023-01-02 오후 2 29 22" src="https://user-images.githubusercontent.com/97153666/210197700-4d5b8275-cfce-4344-b103-4b3446b89692.png">

- 불필요한 리렌더링을 막을 수 있다.

</details>

<details>
  <summary>memo 사용해서 피드 무한스크롤 시 이전 게시글 최적화 작업</summary>

</details>

<details>
  <summary>토큰 검증을 통한 사용자 인증 확인</summary>

### 기존 RequireAuth 컴포넌트

```jsx
const RequireAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to='login' state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
```

<img width="1194" alt="스크린샷 2023-01-02 오후 4 25 09" src="https://user-images.githubusercontent.com/97153666/210203674-d1ad5521-adad-483c-907a-39082a6d5a5e.png">

### isValid 검증을 통해 알맞은 토큰인지 검증

```jsx
const RequireAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = async () => {
      try {
        const { data: isValid } = await axiosPrivate.get('/user/checktoken');
        if (!isValid) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    isValid();
  }, []);

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to='login' state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
```

</details>

<details>

<summary>복잡한 경로 jsconfig.json으로 깔끔하게 정리하기</summary>

</details>
