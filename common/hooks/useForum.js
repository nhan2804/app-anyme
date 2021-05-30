import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useForum() {
  return useQuery(["forum"], async () => {
    const data = await api.get(`${config.api}m/forum`);
    return data.data;
  });
}
