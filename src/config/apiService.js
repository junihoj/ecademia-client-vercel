import axios from "axios";


const apiService = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API
});
export default apiService;