import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: {
        'Content-Type': 'Application/json',
    },
});

export default api;