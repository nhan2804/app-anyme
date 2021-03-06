import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";
export default function useComment() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (data) => {
      const objMuta = await api.post(`${config.api}m/comment`, data);
      return objMuta;
    },
    {
      onSuccess: (data) => {
        const { id } = data.data;
        queryClient.invalidateQueries(["forum", { id }]);
      },
    }
  );
  return query;
}
