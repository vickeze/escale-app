import { axios } from "@/lib/axios";
import { Food } from "@/types/Food";
import { useQuery } from "@tanstack/react-query";

export const useFoodsData = () => {
  return useQuery({
    queryKey: ["allFoods"],
    queryFn: async (): Promise<{ data: Food[] }> => axios.get("/foods"),
  });
};
