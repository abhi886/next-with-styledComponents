import { createClient } from "contentful";
import Head from "next/head";
import MasterLayout from "../src/components/MasterLayout";
import Main from "../src/components/Main";
import { getTwoBlogs } from "../src/lib/blog";

export default function Home({ vlogs }) {
  // console.log(blogs);
  return <Main vlogs={vlogs}></Main>;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      vlogs: res.items,
    },
  };
}
