import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useDetailCourse(id) {
  return useQuery(["course", { id }], async () => {
    const data = await api.get(`${config.api}course/` + id + "/slug");
    return data.data;
  });
}
