import { blog } from "../../src/data/blog";
// import { getTwoBlogs } from "../../src/lib/blog";
import styled from "styled-components";
import BlogContent from "../../src/components/Blogs/blog";
import { Container } from "react-bootstrap";

const BlogMain = styled.div`
  padding-top: 82px;
`;
const Blog = ({ blogs }) => {
  return (
    <BlogMain>
      <Container>
        {blogs.map((b) => (
          <BlogContent key={b.id} blog={b}></BlogContent>
        ))}
      </Container>
    </BlogMain>
  );
};

export async function getStaticProps() {
  const blogs = blog;
  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
