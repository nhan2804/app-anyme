import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useDocument() {
  return useQuery(["document"], async () => {
    const data = await api.get(`${config.api}m/document`);
    return data.data;
  });
}
