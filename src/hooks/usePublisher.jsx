import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePublisher = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: publishers = []} = useQuery({
         queryKey: ['publishers'],
         queryFn: async () => {
             const res = await axiosSecure.get('/publisher')
             return res.data;
         }
    })
    return [publishers, refetch]
};

export default usePublisher;