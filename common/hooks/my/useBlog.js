import { useQuery } from "react-query";
import config from "../../../api/config";
import api from "../../../api";

export default function useBlogs() {
  return useQuery(["my-blog"], async () => {
    const data = await api.get(`${config.api}me/blog`);
    return data.data;
  });
}
