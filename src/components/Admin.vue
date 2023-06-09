<template>
    <template v-if="users">
        <div class="users">
            <table>
                <thead>
                    <tr>
                        <th>Ism</th>
                        <th>Familiya</th>
                        <th>telefon nomer</th>
                        <th>Passport</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user._id" @click="() => toProfile(user._id)">
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.passport }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>
    <template v-else>
        <p style="text-align: center; width: 100%;">Loading...</p>
    </template>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getProfile', this.$route.params.id)
        this.$store.dispatch('getProfiles')
            .then((res) => {
                this.users = this.users.concat(res)
            })
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
        async toProfile(id) {
            await this.$store.dispatch('getProfile', id)
            this.$router.push(`/profile/${id}`)
        }
    }
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
    user-select: none;
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