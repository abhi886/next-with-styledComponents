import { getAllBlogIds, getBlogsData } from "../../src/lib/blog";
import styled from "styled-components";

const Abcd = styled.div`
  padding-top: 150px;
`;
const Post = ({ blogData }) => {
  console.log(blogData);
  return <Abcd>{blogData.data}</Abcd>;
};

export async function getStaticPaths() {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
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
