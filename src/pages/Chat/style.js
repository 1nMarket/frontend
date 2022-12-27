import styled from 'styled-components';
import BasicProfile from '../../assets/icons/basic-profile.svg';
import NewChat from '../../assets/icons/NewChat.svg';

export const Content = styled.main`
    padding-top: 48px;
`;

export const ChatList = styled.ul`

`;

export const ChatItem = styled.li`

`;

export const BasicProfileIcon = styled.img.attrs({
    src: BasicProfile,
    alt: '기본 프로필 아이콘',
  })``;

  export const NewChatMark = styled.img.attrs({
    src: NewChat,
    alt: '새로운 메세지 표시',
  })``;

  export const ChatUserName = styled.p``;

  export const ChatContent = styled.p``;

  export const ChatDate = styled.p``;
