import axios from "axios";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { Users } from "../model";

export const useGetUsers = () => {
  return useQuery<Users[]>({
    queryKey: ["users"],
    queryFn: () => {
      return axios
        .get("https://fakestoreapi.com/users?limit=9")
        .then((r: AxiosResponse<Users[]>) => {
          return r.data;
        });
    },
  });
};
