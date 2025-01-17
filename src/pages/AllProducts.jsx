import { useQuery } from "@tanstack/react-query";
import ExploreOurProducts from "../components/ExploreOurProducts";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/loadingSlice";
import axios from "axios";
import { useEffect } from "react";

export default function AllProducts() {
  const dispatch = useDispatch();

  const { isFetching, error, data, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return axios.get("/product");
    },
    onSuccess: () => {
      dispatch(setLoading({ isLoading: false }));
    },
    onError: (error) => {
      toast.error("Failed to load products");
      dispatch(setLoading({ isLoading: false }));
    },
  });

  // Dispatch loading state when fetching starts
  useEffect(() => {
    dispatch(setLoading({ isLoading: isFetching }));
  }, [isFetching, dispatch]);

  return (
    <>
      {isError ? (
        <div>Error loading products</div>
      ) : (
        <ExploreOurProducts products={data?.data} />
      )}
    </>
  );
}
