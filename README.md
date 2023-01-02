# 1인마켓

## 주요기능

<details>
  <summary>useTitle로 효율적인 Doc Title 설정하기</summary>

### 페이지 타이틀

브라우저를 통해 웹사이트에 접속하면 대표적으로 상단 탭에 페이지 제목이 위치하게 됩니다. 이 페이지 제목이 `Document Title`입니다. 가장 대표적인 웹사이트의 타이틀로 사용자한테도 중요하게 보이는 요소이자 각 페이지마다 해당 페이지의 주제를 잘 나타낼 수 있는 요소라 생각합니다.

<div style="display: flex; justify-content: center">
  <img width="518" alt="스크린샷 2023-01-02 오후 9 03 49" src="https://user-images.githubusercontent.com/97153666/210228808-2bc81167-ca94-4c1d-b022-c3891ad8892b.png">
</div>

하지만 React는 SPA이고 하나의 `index.html`을 가지기 때문에 각 페이지마다의 타이틀을 `<title></title>` 요소로 변경할 수가 없습니다. 따라서 다음과 같이 `useTitle` 커스텀 훅을 만들었습니다.

### useTitle

```js
import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => document.title = prevTitle;
  }, [title]);
};

export default useTitle;
```

`useTitle`은 `unmount`시까지 이전 페이지 타이틀이다가 새 페이지 `mount`하는 경우에 그 페이지의 타이틀로 바꿀 수 있도록 만들었습니다.

#### useTitle 적용

```jsx
const Login = () => {
  useTitle('1nMarket - Login');

  // ...
}
```

<img width="1191" alt="스크린샷 2023-01-02 오후 9 16 07" src="https://user-images.githubusercontent.com/97153666/210230071-ddc55885-8048-4f51-8e82-476169b12562.png">

다음처럼 useTitle에 인자로 `1nMarket - Login`을 넘겨주게 되면 해당 페이지의 타이틀로 변경하게 됩니다.

</details>

<details>
  <summary>ObserverIntersection Api 통해서 피드 무한스크롤 구현</summary>

```js

```

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
