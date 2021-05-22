import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";
export default function useNewPost() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (data) => {
      const objMuta = await api.post(`${config.api}m/forum`, data);
      return objMuta;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("forum");
      },
    }
  );
  return query;
}
