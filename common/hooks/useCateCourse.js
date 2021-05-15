import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useCateCourse() {
  return useQuery(["cate-course"], async () => {
    const data = await api.get(`${config.api}cate-course`);
    return data.data;
  });
}
