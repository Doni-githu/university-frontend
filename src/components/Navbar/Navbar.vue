<template>
    <div class="navbar">
        <img src="/NII.png"  @click="() => $router.push('/')" style="font-weight: 300; width: 90px; height: 90px; background-color: #fff; border-radius: 50%;" />
        <template v-if="!user">
            <div class="btn-group">
                <button @click="() => $router.push('/login')" class="btn btn-primary">Kirish</button>
                <button @click="() => $router.push('/register')" class="btn btn-primary" >Ro'yxatdan o'tish</button>
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
    width: 100%;
    margin: 0 auto;
    height: auto;
    position: relative;

    align-items: center;
    display: flex;
    justify-content: space-around;
    background-color: rgba(39, 40, 40, 0.567);
    padding: 10px 0;
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

@media only screen and (max-width:363px){
    .navbar{
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-bottom: 5rem;
        flex-wrap: wrap;
    }
}

</style>