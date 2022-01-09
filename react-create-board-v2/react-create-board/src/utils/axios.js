// /utils/axios.js

import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 3000,
});

export default axiosInstance;