import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useArticle = () => {
   const axiosSecure = useAxiosSecure();
   const {refetch, data: articles = []} = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allArticles')
            return res.data;
        }
   })
   return [articles, refetch]
}
export default useArticle;