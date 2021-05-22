import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useInfo() {
  return useQuery(["user"], async () => {
    const data = await api.get(`${config.api}m/user`);
    return data.data.data;
  });
}
