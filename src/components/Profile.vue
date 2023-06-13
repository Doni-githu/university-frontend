<template>
    <div class="container">
        <template v-if="!isLoadingProfile && user">

            <div class="left">
                <h1 style="color: var(--black); width: 60%;">{{ $route.query.message.split(' ').map((item) => item.charAt(0) + item.slice(1).toLowerCase()).join(' ') }} {{
                    user.firstName }} {{
        user.lastName }} {{ user.father_name }}</h1>
                    <Alert :type="'success'" :error="$route.query.message" />
                <form @submit.prevent>
                    <div class="flex2">
                        <div class="flex">
                            <label for="email">Telefon raqam</label>
                            <input id="email" class="input" disabled :value="user.phone" />
                        </div>
                        <div class="flex">
                            <label for="email">Talim yo'nalishi</label>
                            <input id="email" class="input" disabled :value="user.type" />
                        </div>
                    </div>
                    <div class="flex2">
                        <div class="flex">
                            <label for="email">Passport seriya raqami</label>
                            <input id="email" class="input" disabled :value="user.passport" />
                        </div>
                        <div class="flex">
                            <label for="email">Viloyat</label>
                            <input id="email" class="input" disabled :value="user.place.region" />
                        </div>
                    </div>
                    <div class="flex2">
                        <div class="flex">
                            <label for="email">O'qiyotgan tili</label>
                            <input id="email" class="input" disabled :value="user.lang" />
                        </div>
                        <div class="flex">
                            <label for="tuman">Tuman</label>
                            <input type="text" class="input" disabled :value="user.place.tuman">
                        </div>
                    </div>
                    <div class="flex2">
                        <div class="flex">
                            <label for="email">Ta'lim turi</label>
                            <input id="email" class="input" disabled :value="user.time" />
                        </div>
                        <div class="flex">
                            <label for="email">Tug'ilgan sana</label>
                            <input id="email" class="input" disabled :value="user.date_of_birth" />
                        </div>
                    </div>
                </form>
            </div>
        </template>
        <template v-else>
            <Loading />
        </template>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    mounted() {
        this.$store.dispatch('getProfile', this.$route.params.id)
        if (!localStorage.getItem('token')) {
            this.$router.push('/profile/' + '6481a776505f395b4767f856')
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.profile,
            isLoadingProfile: state => state.auth.isLoadingProfile,
            profile: state => state.auth.user
        })
    }
}
</script>
<style scoped>
.flex2 {
    display: flex;
    gap: 20px;
}

input {
    padding: 10px 12px;
    outline: 1.3px solid var(--black);
    border-radius: 4px;
    border: none;
    background-color: transparent;
    font-size: 17px;
    transition: all .15s;
    color: #fff;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
}

.btn button {
    padding: 10px 15px;
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 12px;
}

.container {
    width: 80%;
    margin: 0 auto;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 15px;
    background-color: rgba(39, 40, 40, 0.567);
}

input:focus {
    outline: 4px solid var(--black);
}

.form-float {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
}

.borderLeft {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

label {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

@media only screen and (max-width:612px) {
    .container {
        width: 90% !important;
    }
}

@media only screen and (max-width:539px) {
    .container {
        width: 100% !important;
        padding-bottom: 2rem;
    }

    form {
        margin-top: 5px;
    }

    .flex {
        gap: 7px;
    }

    .flex2 {
        display: grid;
        grid-template-columns: auto;
    }
}
</style>