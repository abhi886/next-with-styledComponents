import React from "react";
import styled from "styled-components";

const SingleBlogHeading = styled.h1`
  //   padding-top: 200px;
`;

const SingleBlogParagraph = styled.p``;

const SingleBlog = ({ blog: { blogTitle, blogDescription } }) => {
  return (
    <React.Fragment>
      {" "}
      <SingleBlogHeading>{blogTitle} </SingleBlogHeading>
      <SingleBlogParagraph>{blogDescription}</SingleBlogParagraph>
    </React.Fragment>
  );
};

export default SingleBlog;
