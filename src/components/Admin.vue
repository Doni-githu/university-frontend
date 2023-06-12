<template>
    <template v-if="users">
        <div class="users">
            <table>
                <thead>
                    <tr>
                        <th>N:</th>
                        <th>Ism</th>
                        <th>Familiya</th>
                        <th>Otasining ismi</th>
                        <th>Tug'ilgan sana</th>
                        <th>Manzil (hudud)</th>
                        <th>Tuman (shahar)</th>
                        <th>Passport</th>
                        <th>Ta'lim tili</th>
                        <th>Ta'lim turi</th>
                        <th>Ta'lim yo'nalishi</th>
                        <th>Telefon raqam</th>
                        <th>Parol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user, index in users" :key="user._id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.father_name }}</td>
                        <td>{{ user.date_of_birth }}</td>
                        <td>{{ user.place.region }}</td>
                        <td>{{ user.place.tuman }}</td>
                        <td>{{ user.passport }}</td>
                        <td>{{ user.lang }}</td>
                        <td>{{ user.time }}</td>
                        <td>{{ user.type }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.password }}</td>
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
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    transition: all .2s;
}

td{
    padding: 10px;
}



tbody tr {
    cursor: pointer;
}



.users {
    width: 90%;
    height: 600px;
    overflow-y: auto;
    margin: 0 auto;
}
::-webkit-scrollbar{
    width: 4px;
    height: 2px;
}

::-webkit-slider-thumb{
    background-color: red;
}
table {
    width: 90%;
    height: 400px;
    overflow: auto !important;
}

td {
    text-align: center;
}

th {
    padding: 10px;
    text-align: center;
}
</style>