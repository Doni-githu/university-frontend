<template>
    <template v-if="!isLoadingProfile && users">
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
                        <td>{{ index }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.passport }}</td>
                        <td>{{ user.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>
    <template v-else-if="!isLoadingProfile && !users">
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
                this.users = this.users.concat(res)
            })
        if (!localStorage.getItem('token')) {
            this.$router.push("/login");
        }
    },
    data() {
        return {
            users: []
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
    border: 1px solid var(--blue);
    color: var(--blue);
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
</style>