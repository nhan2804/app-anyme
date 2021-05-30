import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
export default function useImgBB() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (data) => {
      let form = new FormData();
      form.append("image", data);
      const objMuta = await axios.post(
        `https://api.imgbb.com/1/upload?key=f85a8e48d418ee83c0c424f9500d227e`,
        form
      );
      return objMuta.data.data.display_url;
    },
    {
      onSuccess: (d) => {
        // const id = d.data;
        console.log(d);
        // queryClient.invalidateQueries("forum");
      },
      onError: (e) => {
        console.log("loi");
        console.log(e.response);
      },
    }
  );
  return query;
}
