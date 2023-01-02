# 1인마켓

## 팀원 및 역할분담

|**프론트**|**디자인 & 프론트**|**프론트**|**프론트**|
|:--------:|:--------:|:--------:|:--------:|
|[재원](https://github.com/oneny)|[승미](https://github.com/wSeungMi)|[석규](https://github.com/angenehms)|[민희](https://github.com/dev-chu)| 
|<img src="https://avatars.githubusercontent.com/u/97153666?v=4" width="100" />|<img src="https://avatars.githubusercontent.com/u/104605709?v=4" width='100'/>|<img src="https://avatars.githubusercontent.com/u/111214565?v=4"  width='100'/>|<img src='https://avatars.githubusercontent.com/u/108019693?v=4' width='100' />

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
onst Home = () => {
  const [postsList, setPostList] = useState([]);
  const [hasNextFeed, setHasNextFeed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const page = useRef(0);
  const observerTargetEl = useRef(null);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextFeed) return;

    const getFeed = async () => {
      const {
        data: { posts },
      } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page.current}`);
      setPostList((prev) => [...prev, ...posts]);
      setHasNextFeed(posts.length % 10 === 0);
      setIsLoading(false);
      page.current += 10;
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getFeed();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [hasNextFeed]);

  return (
    <>
      <HomeHeader />
      <S.Container>
        <PostsList postsList={postsList} />

        <div ref={observerTargetEl} />
      </S.Container>
    </>
  );
};
```

</details>

## 트러블 슈팅

<details>
  <summary>useDebounce 사용해서 검색 최적화하기</summary>

### 기존 Search 컴포넌트

```jsx
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!keyword.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(`/user/searchuser/?keyword=${keyword}`);
      setSearchList(data);
    };
    searchUsers();
  }, [keyword]);

};
```

<img width="1656" alt="스크린샷 2023-01-02 오후 2 15 55" src="https://user-images.githubusercontent.com/97153666/210197695-9f83b85e-c657-44ae-abbe-d9ced33d1aec.png">

기존의 Search 페이지에서 검색칸에 값을 입력할 때마다 api를 호출하기 때문에 필요없는 요청을 너무 많이 하게 되어 이를 줄일 필요가 있다고 느끼게 되었습니다. 그래서 바로바로 호출하기 보다는 값을 입력한 후 시간이 어느 정도 흐른 후에 api를 호출하는 방식으로 만들기 위해서 useDebounce 커스텀 훅을 생성했습니다.
이 때, `debounce`는 쉽게 말해 특정 시간이 지난 후에 한 번만 이벤트가 실행되도록 하는 것입니다.

### useDebounce

```js
// hooks/useDebounce.js
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

입력된 값(`value`)를 state로 재정의(`debouncedValue`)한 후, `useEffect`에서 `setTimeout`을 이용하여 특정 시간이 지난 후에 전달받은 `debouncedValue`의 값을 변경하도록 작성했습니다.    
`delay`는 기본 500밀리초를 기본으로 `setDebounceValue`가 실행되기까지의 지연 시간입니다.

#### useDbounce 훅 적용

```jsx
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const debouncedValue = useDebounce(keyword);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!debouncedValue.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(
        `/user/searchuser/?keyword=${debouncedValue}`,
      );
      setSearchList(data);
    };
    searchUsers();
  }, [debouncedValue]);
};
```

<img width="1583" alt="스크린샷 2023-01-02 오후 2 29 22" src="https://user-images.githubusercontent.com/97153666/210197700-4d5b8275-cfce-4344-b103-4b3446b89692.png">

기존의 `keyword`가 아닌 이제는 사용자가 입력하고 끝으로 500밀리초가 지나서 상태값이 바뀌는 `debouncedValue`를 통해 불필요한 리렌더링을 막을 수 있게 되었습니다.

</details>

<details>
  <summary>memo 사용해서 피드 무한스크롤 시 이전 게시글 최적화 작업</summary>

</details>

<details>
  <summary>사용자 토큰 검증</summary>

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
```

저희는 사용자가 로그인하면 `accessToken`을 localStorage에 저장하는 방식을 사용했습니다. 그리고 위 `RequireAuth` 컴포넌트을 통해 localStorage에 `token`이 있는 경우에 `<Outlet>`을 통해 자식 요소들을 보여주고, 없는 경우에는 `/login` 경로로 이동하도록 작성했습니다. 하지만 이 때 문제가 있는 것을 확인했습니다.

<img width="1194" alt="스크린샷 2023-01-02 오후 4 25 09" src="https://user-images.githubusercontent.com/97153666/210203674-d1ad5521-adad-483c-907a-39082a6d5a5e.png">

위 사진처럼 인위적으로 localStorage에 `token`과 그 값으로 아무렇게나 정하고 저장하면 로그인 후에만 들어갈 수 있는 페이지도 들어갈 수 있게 됩니다. 따라서 토큰의 유무 확인만으로는 부족하고, `token`을 검증하는 과정이 필요하다고 느끼게 되었습니다.

### `/user/checktoken` api를 통해 알맞은 토큰인지 검증

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
```

위 `useEffect` 안에서 localStorage에 저장된 `token`이 알맞는 것인지 `GET /user/checktoken`을 통해서 확인한 후 만약 `401(unauthorized)`나 `isValid: false`를 받게 되면 다음처럼 localStorage에 저장된 token을 지우고 `/login` 페이지로 이동할 수 있도록 작성했습니다.  
만약 `isValid: true`를 응답받게 되면 기존의 로직대로 `<Outlet />`을 통해 자식 요소들을 계속해서 보여주도록 했습니다.

</details>

<details>

<summary>복잡한 경로 jsconfig.json으로 깔끔하게 정리하기</summary>

### 절대 경로 적용 전 router.jsx 파일

```jsx
// src/routes/Route.jsx
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
import RequireAuth from '../components/common/RequireAuth';
import Follows from '../pages/Follows';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PostUpload from '../pages/PostUpload';
import ProdcutUpload from '../pages/ProductUpload';
import Profile from '../pages/Profile';
// ...
```

상대 경로로 멀리 떨어진 컴포넌트 참조 시 경로가 지저분해질 수 있고, 현재 컴포넌트 위치를 옮기면 vscode에서 import Path를 제대로 못 잡아주는 경우가 간혹 있습니다. 따라서 절대 경로를 설정해줘 이를 해결하고자 했습니다.

### 절대경로 설정

루트폴더에 `jsonconfig.json`을 생성하여 다음과 같이 `"baseUrl": "src"`를 작성하면 루트폴더가 src 폴더로 설정되고, 절대경로 작성시 src폴더에서부터 경로를 찾게 됩니다.

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

### `export ... from ...`로 모듈 다시 내보내기

```js
// pages/index.js
export { default as Home } from './Home';
export { default as Chat } from './Chat';
export { default as Follows } from './Follows';
export { default as Login } from './Login';
// ...
```

`components`와 `pages` 폴더에 index.js 파일을 생성해 다음과 같이 모듈을 다시 내보내줘 경로를 참조하는 경우 `component`와 `pages`만 작성해도 참조할 수 있도록 만들어줬습니다.
  * `export default`로 내보내는 경우에는 저희처럼 `export { default as Home } from './Home'`으로 작성해줘야 합니다.
  * 만약 그냥 `export`로 내보내는 경우는 `export * from './Home'`으로도 가능합니다.

### 경로 참조

```jsx
// routes/Route.jsx
import {
  Follows,
  Home,
  // ...
} from 'pages';
import { Layout, Navbar, RequireAuth } from 'components';
```
```jsx
// pages/Search
import { useState, useEffect } from 'react';
import { SearchHeader, SearchList } from 'components';
import { useDebounce, useTitle } from 'hooks';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';

// ...
```

위의 과정을 통해 경로를 깔끔하게 관리하는 것만으로 import하기 위한 코드를 한 줄로 줄일 수 있고, 파일 위치 파악을 간단히 할 수 있도록 만들 수 있습니다. 그리고, 현재 컴포넌트 위치를 옮겨도 절대 경로와 `index.js`로 참조하므로 IDE에 종속적이지 않습니다.

</details>
