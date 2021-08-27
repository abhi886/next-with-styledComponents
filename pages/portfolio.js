import { getAllBlogIds } from "../src/lib/blog";
const Portfolio = () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  console.log(paths);
  console.log(getAllBlogIds());

  return <p>This is the Portfolio Section</p>;
};

export default Portfolio;
