import { useQuery } from "react-query";
import config from "../../../api/config";
import api from "../../../api";

export default function useUser() {
  return useQuery(["my"], async () => {
    const data = await api.get(`${config.api}me`);
    return data.data;
  });
}
