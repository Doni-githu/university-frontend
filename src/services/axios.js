import axios from "axios"

axios.defaults.baseURL = `http://localhost:8000/api`

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token') ? `Token ${localStorage.getItem('token')}` : ''
    config.headers.Authorization = token
    return config
})

export default axios