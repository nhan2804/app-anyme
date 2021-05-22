import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useCateForum() {
  return useQuery(["cate-forum"], async () => {
    const data = await api.get(`${config.api}cate-forum`);
    return data.data;
  });
}
