import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useCateCourse(query) {
  return useQuery(["cate-course", { query }], async () => {
    const data = await api.get(`${config.api}cate-course?query=` + query);
    return data.data;
  });
}
