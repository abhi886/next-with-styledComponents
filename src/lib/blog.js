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
  // let arr = [...blog];
  // let BlogsIds = arr.map((ar) => ar.id).join;
  const ids = [{ id: "1" }, { id: "2" }];
  return ids;
}

export function getBlogsData(id) {
  // let arr = [...blog];
  // let BlogsIds = arr.map((ar) => ar.id).join;
  const data = "this is the content";
  return { id, data };
}
