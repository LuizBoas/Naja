import axios from 'axios';

const api = axios.create({
    baseURL: 'https://codex-backend.herokuapp.com'
})

export default api;