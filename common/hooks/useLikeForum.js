import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";
export default function useLikeForum() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (id) => {
      const objMuta = await api.post(`${config.api}m/like`, { id });
      return objMuta;
    },
    {
      onSuccess: (d) => {
        // const id = d.data;
        queryClient.invalidateQueries("forums");
      },
      onError: (e) => {
        console.log("loi");
        console.log({ e });
      },
    }
  );
  return query;
}
