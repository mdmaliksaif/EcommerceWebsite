
import axios from 'axios';
const jwt= localStorage.getItem('jwt');
// const DEPLOYED='https://pear-poised-hen.cyclic.app/'
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
   headers:{
    "Authorization":`Bearer ${jwt}`,
    "Content-Type":"application/json"
   }
});


// api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;