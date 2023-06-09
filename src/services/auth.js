import axios from "./axios.js"

const Auth = {
    register(user) {
        return axios.post('/user', user)
    },
    step2(id, token, userToken) {
        return axios.post('/user/token', { id, token, userToken })
    },
    login(user) {
        return axios.post('/user/login', user)
    },
    getUser() {
        return axios.get('/user')
    },
    getProfile(id) {
        return axios.get(`/user/${id}`)
    },
    getAll(){
        return axios.get('/user/all')
    }
}

export default Auth