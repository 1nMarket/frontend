import { PostItem } from 'components';
import * as S from './style';

const PostsList = ({ postsList, setPostsList }) => {
  return (
    <S.PostsContainer>
      <S.PostWrapper>
        {postsList.map((post) => (
          <PostItem key={post.id} post={post} setPostsList={setPostsList} />
        ))}
      </S.PostWrapper>
    </S.PostsContainer>
  );
};

export default PostsList;
