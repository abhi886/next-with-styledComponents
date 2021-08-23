import Header from "../Header/header";
import Blog from "../../../src/components/Blogs/blog";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Button from "../shared/TestButton";

const BlogPageHeading = styled.h2`
  color: var(--primary-orange);
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const BlogMain = styled.div`
  background-blend-mode: darken;
  background-color: #faf8f2;
  width: 100%;
`;

const BlogConatiner = styled(Container)`
  margin: -6rem auto 11rem;
  position: relative;
  background-color: White;
`;

const Main = () => {
  return (
    <>
      <Header></Header>
      <BlogMain>
        <BlogConatiner>
          <BlogPageHeading>My Latest Blogs</BlogPageHeading>
          <Blog></Blog>
          <Button bgColor='tomato' color='var(--primary-orange)'>
            This is button Test
          </Button>
        </BlogConatiner>
      </BlogMain>
    </>
  );
};

export default Main;
