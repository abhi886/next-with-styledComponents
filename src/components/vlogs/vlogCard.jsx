import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Image from "next/image";
import Link from "next/link";

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

const ImageBox = styled.div``;

const BlogTitle = styled.div`
  a {
    text-decoration: none;
    font-size: 21px;
    color: #000;
  }
`;

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
const BlogMainDiv = styled.div``;

const BlogInfo = styled.div``;
const BlogMain = styled.div`
  padding-top: 48px;

  @media (max-width: 768px) {
    padding-top: 5px;
  }
`;

const BlogImage = styled.div``;

const BlogView = styled.div``;
const BlogDescription = styled.p``;

function getNumberOfCharacters(no, blogDescription) {
  const string = blogDescription;
  const res = string.slice(0, 10);
  return res;
}

const VlogCard = ({ vlog }) => {
  const { blogImage, readTime, title, slug, thumbnail, blogDescription } =
    vlog.fields;
  return (
    <>
      <BlogContent>
        <BorderBox>
          <Row>
            <Col md={4}>
              <ImageBox>
                <Image
                  src={`https:${thumbnail.fields.file.url}`}
                  width={thumbnail.fields.file.details.image.width}
                  height={thumbnail.fields.file.details.image.height}
                ></Image>{" "}
              </ImageBox>
            </Col>
            <Col md={8} lg={8}>
              <BlogMain>
                <BlogTitle>
                  {" "}
                  <Link href={`/vlogs/${encodeURIComponent(slug)}`}>
                    <a>{title}</a>
                  </Link>
                </BlogTitle>

                <List>
                  <ListItem>By: ABHISHEKH MAHARJAN | </ListItem>
                  <ListItem>( About {readTime} mins read )</ListItem>
                </List>

                {/* <BlogDescription>
                {getNumberOfCharacters(
                  10,
                  documentToReactComponents(blogDescription)
                )}
              </BlogDescription> */}
              </BlogMain>
            </Col>
          </Row>
        </BorderBox>
      </BlogContent>
    </>
  );
};

export default VlogCard;
