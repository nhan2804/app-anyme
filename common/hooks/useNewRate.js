import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";
export default function useNewRate() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (data) => {
      const objMuta = await api.post(`${config.api}m/rating`, data);
      return objMuta;
    },
    {
      onSuccess: (d) => {
        const id = d.data;
        queryClient.invalidateQueries("rate", { id });
      },
    }
  );
  return query;
}
