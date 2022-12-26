import React from 'react';
import CommentList from './CommentList';
import CommentReply from './CommentReply';
import { CommentListBox } from './style';

function CommentCard({ postId, comments, setComments }) {
  return (
    <>
      <CommentListBox>
        <CommentList comments={comments} />
      </CommentListBox>
      <CommentReply setComments={setComments} postId={postId} />
    </>
  );
}

export default CommentCard;
