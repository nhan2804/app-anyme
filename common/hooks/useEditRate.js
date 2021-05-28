import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";
export default function useEditRate() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (data) => {
      console.log(data);
      const objMuta = await api.put(
        `${config.api}m/rating/${data.id_ra}`,
        data
      );
      return objMuta;
    },
    {
      onSuccess: (d) => {
        const id = d.data;
        queryClient.invalidateQueries("rate", { id });
      },
      onError: (e) => {
        console.log({ e });
      },
    }
  );
  return query;
}
