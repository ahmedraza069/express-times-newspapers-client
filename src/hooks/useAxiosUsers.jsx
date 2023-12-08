import axios from "axios";

const axiosUsers = axios.create({
    baseURL: 'https://express-times-newspapers-server.vercel.app'
})
const useAxiosUsers = () => {
    return axiosUsers;
};

export default useAxiosUsers;