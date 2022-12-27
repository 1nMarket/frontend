import styled from 'styled-components';
import BasicProfile from '../../assets/icons/basic-profile.svg';
import NewChat from '../../assets/icons/NewChat.svg';

export const Content = styled.main`
    padding: 72px 16px 0px;
`;

export const ChatList = styled.ul``;

export const ChatItem = styled.li``;

export const IconDiv = styled.div`
    position: relative;
`;

export const BasicProfileIcon = styled.img.attrs({
    src: BasicProfile,
    alt: '기본 프로필 아이콘',
  })`
    width: 42px;
    height: 42px;
`;

export const NewChatMark = styled.img.attrs({
    src: NewChat,
    alt: '새로운 메세지 표시',
  })`
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
`;

export const ChatUserName = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.palette.black};
`;

export const ChatContent = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.palette.mediumGray};
`;

export const ChatDate = styled.p`
    font-size: 10px;
    color: ${({ theme }) => theme.palette.border};
`;
