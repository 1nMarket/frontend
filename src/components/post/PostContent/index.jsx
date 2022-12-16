import React from 'react'
import ImageSlide from '../ImageSlide';

const PostContent = ({ post }) => {
  const images = post.image.split(',');
  console.log(images);
  
  return (
    <li>
      <ImageSlide images={images} />
    </li>
  )
}

export default PostContent