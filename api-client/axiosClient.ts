import axios from 'axios';

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },

    (err) => {
        return Promise.reject(err);
    },
);

export default axiosClient;
