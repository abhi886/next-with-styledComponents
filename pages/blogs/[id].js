import SingleBlog from "../../src/components/Blogs/singleBlog";
import { getAllBlogIds, getBlogsData } from "../../src/lib/blog";
import styled from "styled-components";

const Post = ({ blogData }) => {
  const data = blogData.result;
  console.log(data);
  return (
    <>
      {data.map((d) => (
        <SingleBlog blog={d}></SingleBlog>
      ))}
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogsData(params.id);
  return {
    props: {
      blogData,
    },
  };
}

export default Post;
