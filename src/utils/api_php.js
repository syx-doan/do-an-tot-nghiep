import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost/admin_dasboard/api/api-login.php'
});


export default axiosApi;