import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useLogin() {
  const query = useMutation(
    async (data) => {
      const objMuta = await api.post(`${config.api}signin`, data);
      return objMuta;
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  return query;
}
