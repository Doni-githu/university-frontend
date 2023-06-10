<template>
    <div class="container">
        <div class="left">
            <template v-if="error">
                <p style="color: red;">{{ error }}</p>
            </template>
            <form @submit.prevent>
                <Input :maxlength="9" :type="'number'" :placeholder="'Telefon nomer'" v-model="phone" />
                <Input :maxlength="50" :type="'password'" :placeholder="'Parol'" v-model="password" />
                <div>
                    <button @click="onLogIn" class="btn">Kirish</button>
                </div>
            </form>
        </div>
        <div class="right">
            <img src="/log.jpg">
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
                this.error = 'Barcha maydonlar talab qilinadi'
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
    beforeCreate(){
        if(localStorage.getItem('token')){
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

.btn {
    padding: 13px 30px;
    background-color: transparent;
    color: #2A8CFF;
    border: none;
    outline: 2px solid #2A8CFF;
    border-radius: 10px;
    margin-bottom: 2rem;
    font-size: 16px;
    filter: brightness(120%);
    transition: all .1s;
}

.btn:active {
    filter: brightness(80%);
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