// import { blog } from "../../src/data/blog";
import { getAllBlogs } from "../../src/lib/blog";
import styled from "styled-components";
import BlogContent from "../../src/components/Blogs/blog";
import { Container } from "react-bootstrap";

const BlogMain = styled.div`
  padding-top: 82px;
`;
const Blog = ({ blogs }) => {
  console.log(blogs);
  return (
    <BlogMain>
      <Container>
        {blogs.map((blog) => (
          <BlogContent key={blog.id} blogs={blog}></BlogContent>
        ))}
      </Container>
    </BlogMain>
  );
};

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
