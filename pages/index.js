import Head from "next/head";
import MasterLayout from "../src/components/MasterLayout";
import Main from "../src/components/Main";
import { blog } from "../src/data/blog";

export default function Home(blogs) {
  return <Main blog={blogs}></Main>;
}

export async function getStaticProps() {
  const blogs = blog;
  return {
    props: {
      blogs,
    },
  };
}
