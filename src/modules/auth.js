import Auth from "../services/auth"

const state = {
    isLoading: false,
    user: null,
    isLoggedIn: null,
    error: null,
    profile: null,
    isLoadingProfile: false,
    profiles: null,
}

const mutations = {
    StartRegisterAndLoginAndGetUser(state) {
        state.isLoading = true
    },
    SuccessRegisterAndLoginAndGetUser(state, payload) {
        state.isLoading = false
        state.isLoggedIn = true
        state.user = payload
    },
    FailurRegisterAndLoginAndGetUser(state, payload) {
        state.isLoading = false
        state.error = payload
    },
    StartGetProfile(state) {
        state.profile = null
        state.isLoadingProfile = true
    },
    SuccessGetProfile(state, payload) {
        state.isLoadingProfile = false
        state.profile = payload
    },
    FailurGetProfile(state) {
        state.isLoadingProfile = false
    },
    LogOut(state) {
        state.isLoggedIn = false
        state.user = null
        localStorage.removeItem('token')
    },
    StartSendToken(state) {
        state.isLoading = true
    },
    SuccessSendToken(state){
        state.isLoading = false
    },
    StartGetAllProfiles(state){
        state.isLoadingProfile = true
    },
    SuccessGetAllProfiles(state, payload){
        state.profiles = payload
        state.isLoadingProfile = false
    },
    FailurGetAllProfiles(state){
        state.isLoadingProfile = false
    }
}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('StartRegisterAndLoginAndGetUser')
            Auth.register(user)
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    context.commit('SuccessRegisterAndLoginAndGetUser', res.data.user)
                    resolve(res.data.user)
                }).catch((err) => {
                    context.commit('FailurRegisterAndLoginAndGetUser')
                    reject(err.response.data)
                })
        })
    },
    getUser(context) {
        return new Promise(() => {
            context.commit('StartRegisterAndLoginAndGetUser')
            Auth.getUser()
                .then((res) => {
                    context.commit('SuccessRegisterAndLoginAndGetUser', res.data)
                }).catch((err) => {
                    console.log(err)
                    context.commit('FailurRegisterAndLoginAndGetUser', err.response)
                })
        })
    },
    getProfile(context, id) {
        return new Promise((resolve) => {
            context.commit('StartGetProfile')
            Auth.getProfile(id)
                .then((res) => {
                    context.commit('SuccessGetProfile', res.data)
                    resolve(res.data)
                })
        })
    },
    login(context, user) {
        new Promise((resolve, reject) => {
            context.commit('StartRegisterAndLoginAndGetUser')
            Auth.login(user)
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    context.commit('SuccessRegisterAndLoginAndGetUser', res.data.user)
                    resolve(res.data.user)
                }).catch((err) => {
                    console.log(err)
                    context.commit('FailurRegisterAndLoginAndGetUser', err.response.data.message)
                    reject(err.response.data.message)
                })
        })
    },
    sendToken(context, { id, token, userToken}) {
        return new Promise((resolve) => {
            context.commit('StartSendToken')
            Auth.step2(id, token, userToken)
                .then((res) => {
                    context.commit('SuccessSendToken')
                    console.log(res)
                    resolve(res.data)
                }).catch(err => {
                    context.commit('SuccessSendToken')
                    console.log(err.response.data)
                })
        })
    },
    getProfiles(context){
        return new Promise((resolve) => {
            context.commit('StartGetAllProfiles')
            Auth.getAll()
                .then(res => {
                    context.commit('SuccessGetAllProfiles', res.data)
                    console.log(res.data)
                    resolve(res.data)
                }).catch((err) => {
                    context.commit('FailurGetAllProfiles')
                    console.log(err)
                })
        })
    }
}

export default {
    state,
    actions,
    mutations
}