import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useCheckLogin() {
  return useQuery(["login"], async () => {
    const data = await api.get(`${config.api}login`);
    return data.data;
  });
}
