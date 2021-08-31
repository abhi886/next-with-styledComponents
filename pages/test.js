import { createClient } from "contentful";

const Test = ({ vlogs }) => {
  //   const result = await getTwoBlogs();
  console.log(vlogs);

  return <p>Created For test purpose</p>;
};
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
export default Test;
