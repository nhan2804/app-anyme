import { useQuery } from "react-query";
import config from "../../../api/config";
import api from "../../../api";

export default function useCourse() {
  return useQuery(["my-course"], async () => {
    const data = await api.get(`${config.api}me/course`);
    return data.data;
  });
}
