import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useRate(id) {
  return useQuery(["rate", { id }], async () => {
    const data = await api.get(`${config.api}m/rating/${id}`);
    return data.data;
  });
}
