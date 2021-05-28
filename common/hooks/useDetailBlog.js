import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useDetailBlog(id) {
  return useQuery(["blogs", { id }], async () => {
    const data = await api.get(`${config.api}blog/${id}`);
    return data.data;
  });
}
