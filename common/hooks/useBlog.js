import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useBlogs() {
  return useQuery(["blogs"], async () => {
    const data = await api.get(`${config.api}blog`);
    return data;
  });
}
