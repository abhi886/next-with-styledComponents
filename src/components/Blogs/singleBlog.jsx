import React from "react";
import styled from "styled-components";

const ArticleDiv = styled.article`
  padding-top: 200px;
`;

const SingleBlog = ({ blog: { blogTitle } }) => {
  return (
    <React.Fragment>
      {" "}
      <ArticleDiv>
        <h2>{blogTitle}</h2>
        {/* <p>{blogDescription}</p> */}
      </ArticleDiv>
    </React.Fragment>
  );
};

export default SingleBlog;
