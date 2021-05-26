import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useGetDocument(id) {
  return useQuery(["document", { id }], async () => {
    const data = await api.get(`${config.api}m/document/${id}`);
    return data.data;
  });
}
