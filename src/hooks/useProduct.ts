import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";
import { Product } from "../types/product";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get("/products");
      return res.data.products as Product[];
    },
  });
};