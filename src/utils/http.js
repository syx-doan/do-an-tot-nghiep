import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost/admin_dasboard/api/'
});

export default axiosClient;