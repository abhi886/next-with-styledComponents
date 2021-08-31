import Header from "../Header/header";
import Link from "next/link";
import Blog from "../../../src/components/Blogs/blog";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Button from "../shared/TestButton";
import VlogCard from "../../components/vlogs/vlogCard";

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
  justify-content: flex-end;
`;
// const ViewAllButton = styled(Button)``;
const Main = ({ vlogs }) => {
  // console.log(vlogs);
  const newBlogs = vlogs.filter((blog) => blog.fields.displayFrontPage == true);
  return (
    <>
      <Header></Header>
      <BlogMain>
        <BlogConatiner>
          <BlogPageHeading>My Latest Blogs</BlogPageHeading>

          {newBlogs.map((vl) => (
            <VlogCard key={vl.sys.id} vlog={vl}></VlogCard>
          ))}

          <ViewAllButtonDiv>
            <Button
              color='var(--primary-orange)'
              border='1px solid var(--primary-orange)'
              marginTop='5px'
            >
              <Link href={"/vlogs"}>View All</Link>
            </Button>
          </ViewAllButtonDiv>
        </BlogConatiner>
      </BlogMain>
    </>
  );
};

export default Main;
