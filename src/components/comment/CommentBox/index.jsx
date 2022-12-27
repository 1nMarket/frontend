import React from 'react';
// import moment from 'moment';
import 'moment/locale/ko';
import * as S from './style';
import { setTime } from '../../utils/setTime';

function CommentList({ comments }) {
  return (
    <S.CommentListWrapper>
      <S.CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <S.CommentListLi key={data.id}>
                <S.CommentAuthor>
                  <S.ProfileImg src={data.author.image} />
                  <S.InformationBox>
                    <span>{data.author.username}</span>
                    <small>{setTime(data.createdAt)}</small>
                  </S.InformationBox>
                </S.CommentAuthor>
                <S.RightIcon />
                <S.CommentText>{data.content}</S.CommentText>
              </S.CommentListLi>
            );
          })}
      </S.CommentListContainer>
    </S.CommentListWrapper>
  );
}

export default CommentList;
