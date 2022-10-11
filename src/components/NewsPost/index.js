import React from "react";
import {
  NewsPostAfterImg,
  NewsPostContainer,
  NewsPostDate,
  NewsPostDesc,
  NewsPostImg,
  NewsPostTitle,
  NewsPostTopic,
} from "./NewsPost.styles";

const NewsPost = ({ title, thumbnail, preview, uploadedAt, topics }) => {
  return (
    <NewsPostContainer>
      <NewsPostImg>
        <NewsPostTopic>
          <span>{topics[0]}</span>
        </NewsPostTopic>
        <img src={thumbnail} alt={title} />
      </NewsPostImg>
      <NewsPostAfterImg>
        <NewsPostTitle>{title}</NewsPostTitle>
        <NewsPostDate>{uploadedAt}</NewsPostDate>
        <NewsPostDesc>
          <span>{preview.intro} - </span>
          {preview.full}
        </NewsPostDesc>
      </NewsPostAfterImg>
    </NewsPostContainer>
  );
};

export default NewsPost;
