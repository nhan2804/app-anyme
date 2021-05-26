import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useSuggestCourse() {
  return useQuery(["suggest-course"], async () => {
    const data = await api.get(`${config.api}cate-course/suggest`);
    return data.data;
  });
}
