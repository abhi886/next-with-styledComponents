import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const BlogTitle = styled.div`
  font-size: 34px;
  line-height: 39px;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const BlogMainDiv = styled.div``;

const BlogInfo = styled.div``;

const BlogImage = styled.div``;

const BlogView = styled.div``;

const VlogCard = ({ vlog }) => {
  const { blogImage, readTime, title, slug, thumbnail } = vlog.fields;
  return (
    <>
      <BlogMainDiv>
        <BlogTitle>{title}</BlogTitle>
        <BlogInfo>By: ABHISHEKH MAHARJAN | {readTime} mins read</BlogInfo>
        <BlogImage>
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          ></Image>
        </BlogImage>
        <BlogView>
          <Link href={`/vlogs/${encodeURIComponent(slug)}`}>
            <a>View this Blog</a>
          </Link>
        </BlogView>
      </BlogMainDiv>
    </>
  );
};

export default VlogCard;
