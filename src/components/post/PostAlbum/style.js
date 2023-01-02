import styled from 'styled-components';
import { ReactComponent as ImageLayer } from '../../../assets/icons/icon-img-layers.svg';

export const PostContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 16px;
`;

export const PostAlbumItem = styled.li`
  position: relative;
`;

export const AlbumImg = styled.img`
  width: 114px;
  height: 114px;
  object-fit: cover;
`;

export const ImageLayerIcon = styled(ImageLayer)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
