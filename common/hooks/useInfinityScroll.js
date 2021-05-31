useInfinityScroll;
import { useInfiniteQuery, useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useInfinityScroll() {
  const query = useInfiniteQuery(
    "forums",
    async ({ pageParam = 1 }) => {
      const res = await api.get(`${config.api}m/forum?page=` + pageParam);
      return res.data;
    },
    {
      getPreviousPageParam: (firstPage) => firstPage?.current_page,
      getNextPageParam: (lastPage) => {
        console.log(lastPage?.current_page + 1 > lastPage?.last_page);
        return lastPage?.current_page + 1 > lastPage?.last_page
          ? false
          : lastPage?.current_page + 1;
      },
    }
  );
  return query;
}
