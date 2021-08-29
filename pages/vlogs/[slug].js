import styled from "styled-components";
import { Container } from "react-bootstrap";
import { createClient } from "contentful";
import Image from "next/image";
import Skeleton from "../../src/components/skeleton/skeleton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const OpeningDiv = styled(Container)`
  padding-top: 100px;
`;

const Banner = styled.div``;
const Info = styled.div``;
const Method = styled.div``;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      blogs: items[0],
    },
    revalidate: 10,
  };
}

const BlogDetails = ({ blogs }) => {
  if (!blogs) return <Skeleton></Skeleton>;
  const { blogImage, readTime, title, slug, thumbnail, blogDescription } =
    blogs.fields;

  return (
    <OpeningDiv>
      <Banner>
        <Image
          src={`https:${blogImage.fields.file.url}`}
          width={blogImage.fields.file.details.image.width}
          height={blogImage.fields.file.details.image.height}
        ></Image>
        <h2>{title}</h2>
      </Banner>
      <Info>
        <p>Take about {readTime} </p>
      </Info>
      <Method>
        <h3>Share Buttons:</h3>
        <div>{documentToReactComponents(blogDescription)}</div>
      </Method>
    </OpeningDiv>
  );
};

export default BlogDetails;
