import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brpchat-back.herokuapp.com'
})

export default api;
