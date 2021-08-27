import blogs from "../../src/data/blogs.json";
const getListOfBlogs = (req, res) => {
  res.status(200).json(blogs);
};
export default getListOfBlogs;
