import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostEditLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};
`;