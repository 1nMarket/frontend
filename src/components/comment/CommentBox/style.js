import styled from 'styled-components';
import ModalIcon from '../../../assets/icons/icon-more-vertical.svg';

// 댓글 wrapper
export const CommentListWrapper = styled.section`
  border-top: 0.5px solid ${({ theme }) => theme.palette.border};
  max-width: 390px;
  padding: 20px 16px 0;
  margin: 0 18.6px;
  box-sizing: border-box;
  /* width: 100%; */
  display: block;
`;

export const CommentListContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
`;

//
export const CommentListLi = styled.li`
  position: relative;
  margin-bottom: 16px;
`;

// 댓글 작성자 프로필 정보
export const CommentAuthor = styled.div`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;
`;

// 프로필 이미지
export const ProfileImg = styled.img.attrs({
  alt: '프로필 이미지',
})`
  margin-right: 12px;
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
`;

// 프로필 정보
export const InformationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;

  //
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-right: 6px;
  }

  // 댓글 작성 시간
  small {
    color: ${(props) => props.theme.palette['mediumGray']};
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;

    &::before {
      content: '·';
      margin-right: 4px;
    }
  }
`;

// 댓글 내용
export const CommentText = styled.span`
  padding-left: 48px;
  font-size: 14px;
  line-height: 18px;
  font-size: 400;
  color: #333333;
`;

// export const RightIcon = styled.img.attrs({
//   src: ModalIcon,
//   alt: '모달창',
// })`
//   position: absolute;
//   top: 5px;
//   right: 0;
//   width: 20px;
// `;

export const RightIcon = styled.img.attrs({
  src: ModalIcon,
  alt: '모달창',
})`
  position: absolute;
  top: 5px;
  right: 0;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
