<template>
    <div class="container">
        <div class="left">
            <template v-if="error">
                <p style="color: red;">{{ error }}</p>
            </template>
            <form @submit.prevent>
                <Input :maxlength="9" :type="'number'" :placeholder="'Telefon raqam'" v-model="phone" />
                <Input :maxlength="50" :type="'password'" :placeholder="'Parol'" v-model="password" />
                <button @click="onLogIn" class="btn2">Kirish</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            error: '',
            phone: '',
            password: ''
        }
    },
    methods: {
        async onLogIn() {
            if (!this.phone) {
                this.error = `Barcha maydonlar to'ldirish talab qilinadi`
                return
            }

            const user = {
                phone: `+998${this.phone}`,
                password: this.password
            }

            this.$store.dispatch('login', user)
                .then(res => {
                    this.$router.push(res)
                })
        }
    },
    beforeCreate() {
        if (localStorage.getItem('token')) {
            this.$router.back()
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
}

.left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.right {
    width: 50%;
}

select {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    outline: 2px solid #2A8CFF;
    transition: all .1s;
    color: #2A8CFF;
    border-radius: 5px;
}

select:focus {
    outline: 4px solid #2A8CFF;
}

.form-floatw {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #2A8CFF;
}

.right img {
    width: 100%;
    height: 100%;
}

form {
    display: flex;
    flex-direction: column;
    gap: 21px;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.btn2 {
    padding: 10px 15px;
    font-weight: 400;
    font-size: 16px;
    background-color: transparent;
    border: none;
    color: #fff !important;
    outline: 2px solid var(--black);
    border-radius: 4px;
    transition: all .1s;
}

.btn2:hover {
    outline: 4px solid var(--black);
}
@media only screen and (max-width:1200px) {
    .container {
        flex-direction: column-reverse;
    }

    .left {
        width: 80%;
    }

    .right {
        width: 80%;
    }
}

@media only screen and (max-width:667px) {
    .left {
        width: 100%;
    }

    .right {
        width: 100%;
    }
}
</style>