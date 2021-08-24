import Header from "../Header/header";
import Link from "next/link";
import Blog from "../../../src/components/Blogs/blog";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Button from "../shared/TestButton";

const BlogMain = styled.section`
  background-blend-mode: darken;
  background-color: #faf8f2;
  width: 100%;
`;

const BlogConatiner = styled(Container)`
  margin: -6rem auto 11rem;
  position: relative;
  background-color: White;
`;
const BlogPageHeading = styled.h2`
  color: var(--primary-orange);
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding-top: 31px;
`;

const ViewAllButtonDiv = styled.div`
  display: flex;
`;
// const ViewAllButton = styled(Button)``;
const Main = ({ blog }) => {
  return (
    <>
      <Header></Header>
      <BlogMain>
        <BlogConatiner>
          <BlogPageHeading>My Latest Blogs</BlogPageHeading>
          {blog.blogs.map((bl) => (
            <Blog key={bl.id} blog={bl}></Blog>
          ))}
          <ViewAllButtonDiv>
            <Button
              color='var(--primary-orange)'
              border='1px solid var(--primary-orange)'
              marginTop='5px'
            >
              <Link href={"/blogs"}>View All</Link>
            </Button>
          </ViewAllButtonDiv>
        </BlogConatiner>
      </BlogMain>
    </>
  );
};

export default Main;
