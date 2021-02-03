import api from "./index";
let getPosts = () => {
  return api.get("forum");
};
let viewPost = (id) => {
  return api.get(`forum/${id}/slug`);
};
export { getPosts, viewPost };
