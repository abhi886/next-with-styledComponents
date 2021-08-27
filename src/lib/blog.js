import blogs from "../../src/data/blogs.json";

export function getAllBlogs() {
  let allBlogs = blogs;
  // console.log(blogs);
  return allBlogs;
}

export function getTwoBlogs() {
  let twoBlogs = blogs.slice(0, 2);
  // console.log(blogs);
  return twoBlogs;
}

export function getAllBlogIds() {
  const result = blogs.map((blog) => ({ params: { id: `${blog.id}` } }));

  return result;
}

export function getBlogsData(id) {
  const result = blogs.filter((blog) => blog.id == id);
  return { id, result };
}
