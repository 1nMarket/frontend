import styled from 'styled-components';
import { ReactComponent as PostListOn } from '../../../assets/icons/icon-post-list-on.svg';
import { ReactComponent as PostListOff } from '../../../assets/icons/icon-post-list-off.svg';
import { ReactComponent as PostAlbumOn } from '../../../assets/icons/icon-post-album-on.svg';
import { ReactComponent as PostAlbumOff } from '../../../assets/icons/icon-post-album-off.svg';

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-top: 0.5px solid ${({ theme }) => theme.palette.border};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.border};
`;

export const PostHeader = styled.div`
  max-width: 390px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  padding: 9px 16px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const PostListOnIcon = styled(PostListOn)`
  cursor: pointer;
`;

export const PostListOffIcon = styled(PostListOff)`
  cursor: pointer;
`;

export const PostAlbumOnIcon = styled(PostAlbumOn)`
  cursor: pointer;
`;

export const PostAlbumOffIcon = styled(PostAlbumOff)`
  cursor: pointer;
`;
