import api from "./index";
let getBlogs = () => {
  return api.get("blog");
};
let viewBlog = (id) => {
  return api.get(`blog/${id}`);
};
export { getBlogs, viewBlog };
