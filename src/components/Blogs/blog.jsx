import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import Images from "../shared/Images";
import img from "../../../public/Blog_Logo.jpg";

const BlogContent = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-bottom: 0.3125rem solid var(--primary-orange);
`;

const BorderBox = styled.div`
  border: 1px solid #e9ecef;
  padding: 5px;
`;

const ImageBox = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BlogTitle = styled.h5``;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 10px 0px;
`;

const BlogDescription = styled.p``;
const Blog = ({
  blogs: { id, blogTitle, publishedDate, readTime, blogDescription },
}) => {
  return (
    <BlogContent>
      <BorderBox>
        <Row>
          <Col md={4}>
            <ImageBox>
              <Images source={img} width={400} height={300}></Images>
            </ImageBox>
          </Col>
          <Col md={8} lg={8}>
            <BlogTitle>{blogTitle}</BlogTitle>

            <List>
              <ListItem>{publishedDate}</ListItem>
              <ListItem>( About {readTime} mins read )</ListItem>
            </List>

            <BlogDescription>{blogDescription}</BlogDescription>
          </Col>
        </Row>
      </BorderBox>
    </BlogContent>
  );
};

export default Blog;
