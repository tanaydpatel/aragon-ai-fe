import axios from 'axios';


// create apiClient for axios for easy management of
// baseURL and accessToken of user
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});



export default apiClient;
