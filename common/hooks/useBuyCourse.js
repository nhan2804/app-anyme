import { useMutation, useQueryClient } from "react-query";
import api from "../../api";
import config from "../../api/config";
import { Alert } from "react-native";
export default function useBuyCourse() {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (id) => {
      const objMuta = await api.post(`${config.api}course`, { id });
      return objMuta;
    },
    {
      onSuccess: () => {
        Alert.alert("Thông tin", "Mua thành công khóa học", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        queryClient.invalidateQueries("course");
      },
    }
  );
  return query;
}
