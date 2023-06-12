<template>
    <div class="navbar">
        <h1 @click="() => $router.push('/')" style="font-weight: 300;">Brand</h1>
        <template v-if="!user">
            <div class="btn-group">
                <button @click="() => $router.push('/login')">Kirish</button>
                <button @click="() => $router.push('/register')">Royxattan o'tish</button>
            </div>
        </template>
        <template v-else>
            <Icon @click="change">{{ user.firstName ? user.firstName.substring(0, 1).toUpperCase() : 'A' }}</Icon>
            <template v-if="modal">
                <ul class="pos">
                    <template v-if="user?.rol === 'student'">
                        <li @click="toProfile">Profile</li>
                    </template>
                    <template v-else>
                        <li @click="toAdminPanel">Admin panel</li>
                    </template>
                    <li @click="logout">Chiqish</li>
                </ul>
            </template>
        </template>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            modal: false
        }
    },
    computed: {
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn,
            user: state => state.auth.user,
            isDirector: state => state.auth.isDirector
        }),
        isLoggedInFunction() {
            if (!localStorage.getItem('token')) {
                return false
            } else {
                return true
            }
        }
    },
    methods: {
        async toProfile() {
            await this.$store.dispatch('getProfile', this.user._id)
            this.modal = false
            this.$router.push(`/profile/${this.user._id}`)
        },
        async toAdminPanel() {
            await this.$store.dispatch('getProfile', this.user._id)
            this.modal = false
            this.$router.push(`/admin/${this.user._id}`)
        },
        change() {
            this.modal = !this.modal
        },
        logout() {
            this.$store.commit('LogOut')
            this.$router.push('/')
        },

    }
}
</script>
<style scoped>
.navbar {
    width: 90%;
    margin: 0 auto;
    height: 100px;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

h1 {
    user-select: none;
    cursor: pointer;
    background-color: 4px solid var(--black);
    color: var(--black);
}

.btn-gruop {
    display: flex;
}

.btn-group button:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border: 2px solid var(--black);
    color: #fff;
}

.btn-group button:first-child:hover {
    color: #fff !important;
    border-color: transparent;
    background-color: var(--black);
}

button {
    cursor: pointer;
    user-select: none;
    padding: 7px 12px;
    outline: none;
    font-size: 17px;
    transition: all .18s;
    background-color: transparent;
}

.pos {
    position: absolute;
    right: 0;
    top: 75%;
    border-radius: 12px;
    list-style: none;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    background-color: var(--black);
}

.pos li {
    color: #fff;
    cursor: pointer;
    padding: 5px 10px;
}

.btn-group button:nth-child(2) {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border: 2px solid var(--black);
    color: #fff !important;
}

.btn-group button:nth-child(2):hover {
    color: #fff;
    border-color: transparent;
    background-color: var(--black);
}

@media only screen and (max-width:363px){
    .navbar{
        display: flex;
        flex-direction: column;
    }
}
</style>