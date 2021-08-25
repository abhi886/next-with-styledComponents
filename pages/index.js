import Head from "next/head";
import MasterLayout from "../src/components/MasterLayout";
import Main from "../src/components/Main";
import { getTwoBlogs } from "../src/lib/blog";

export default function Home(blogs) {
  return <Main blog={blogs}></Main>;
}

export async function getStaticProps() {
  const blogs = await getTwoBlogs();
  return {
    props: {
      blogs,
    },
  };
}
