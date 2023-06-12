<template>
    <template v-if="users">
        <div class="users">
            <table>
                <thead>
                    <tr>
                        <th>N:</th>
                        <th>Ism</th>
                        <th>Familiya</th>
                        <th>Passport</th>
                        <th>telefon nomer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user, index in users" :key="user._id" @click="() => toProfile(user._id)">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.passport }}</td>
                        <td>{{ user.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>
    <template v-else>
        <Loading />
    </template>
</template>
<script>
import { mapState } from 'vuex'
import Loading from '../ui-components/Loading.vue'

export default {
    mounted() {
        this.$store.dispatch("getProfile", this.$route.params.id);
        this.$store.dispatch("getProfiles")
            .then((res) => {
                this.users = res
            })
        if (!localStorage.getItem('token')) {
            this.$router.push("/login");
        }
    },
    updated() {
        if (!localStorage.getItem('token')) {
            this.$router.push("/login");
        }
    },

    data() {
        return {
            users: null
        };
    },
    ...mapState({
        isLoadingProfile: state => state.auth.isLoadingProfile,
        isDirector: state => state.auth.isDirector,
        profiles: state => state.auth.profiles
    }),
    methods: {
        async toProfile(id) {
            await this.$store.dispatch("getProfile", id);
            this.$router.push(`/profile/${id}`);
        }
    },
    components: { Loading }
}
</script>
<style scoped>
table,
tr,
td {
    border: 1px solid var(--black);
    color: var(--black);
    transition: all .2s;
}

table:hover,
td:hover,
th:hover {
    color: #000;
    background-color: #fff;
}


tbody tr {
    cursor: pointer;
}



.users {
    width: 90%;
    margin: 0 auto;
}

table {
    width: 100%;
}

td {
    text-align: center;
}

th {
    padding: 10px;
    text-align: center;
}

@media only screen and (max-width:400px) {
    .users {
        width: 100%;
    }
}
</style>