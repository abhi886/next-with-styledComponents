import { blog } from "../../src/data/blog";

export function getTwoBlogs() {
  let arr = blog;
  let twoBlogs = [...arr].slice(1, 3);
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
