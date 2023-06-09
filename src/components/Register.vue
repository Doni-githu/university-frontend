<template>
    <div class="container">
        <div class="left">
            <h1 style="margin-bottom: 2rem; color: #2A8CFF;">Akkount yasash</h1>
            <template v-if="error">
                <Alert :type="'danger'" :error="error" />
            </template>
            <template v-if="!id">
                <form @submit.prevent>
                    <div class="flex">
                        <Input :maxlength="50" :type="'text'" :placeholder="'Ism'" v-model="firstName" />
                        <Input :maxlength="50" :type="'text'" :placeholder="'Familiya'" v-model="lastName" />
                    </div>
                    <div class="flex">
                        <Input :maxlength="120" :type="'password'" :placeholder="'Parol'" v-model="password" />
                        <Input :maxlength="400" :type="'password'" :placeholder="'Parolni qayta tering'"
                            v-model="rePassword" />
                    </div>
                    <div class="flex">
                        <Input :maxlength="9" :type="'text'" :placeholder="'Passport seriayasi'" v-model="passport" />
                        <div class="form-floatw">
                            <p>Viloyat </p>
                            <select @change="event => onChangeValue({ type: 'tuman', e: event })">
                                <option v-for="viloyat in viloyatlar">{{ viloyat.tuman }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex">
                        <Input :maxlength="9" :type="'number'" :placeholder="'Telefon nomer'" v-model="number" />
                        <Input :type="'text'" :placeholder="`Talim yo'nalishingiz`" v-model="yonalish" />
                    </div>
                    <div>
                        <button @click="onSumbit" class="btn">Yasash</button>
                    </div>
                </form>
            </template>
            <template v-else>
                <form @submit.prevent>
                    <Input :type="'text'" :placeholder="'Kodni yozing'" v-model="token" />
                    <div>
                        <button @click="onSumbitCode" class="btn">Otish</button>
                    </div>
                </form>
            </template>
        </div>
        <div class="right">
            <img src="/sign.jpg">
        </div>
    </div>
</template>
<script>
import Alert from '../ui-components/Alert.vue';

export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            number: "",
            value: "Uzbekistan",
            tuman: "Toshkent",
            viloyatlar: [
                {
                    tuman: "Toshkent",
                },
                {
                    tuman: "Andijon"
                },
                {
                    tuman: "Farg'ona"
                },
                {
                    tuman: "Namangan"
                },
                {
                    tuman: "Surxondaryo"
                },
                {
                    tuman: "Samarqand"
                },
                {
                    tuman: "Buxoro"
                },
                {
                    tuman: "Xorazm"
                },
                {
                    tuman: "Navoiy"
                },
                {
                    tuman: "Jizzax"
                },
                {
                    tuman: "Sirdaryo"
                },
                {
                    tuman: "Qarshi"
                },
                {
                    tuman: "Toshkent Shahar"
                },
                {
                    tuman: "Qoraqalpog'iston"
                }
            ],
            yonalish: '',
            passport: "",
            error: "",
            rePassword: '',
            userToken: ""
        };
    },
    methods: {
        onChangeValue({ type, e }) {
            if (type === "value") {
                this.value = e.target.value;
            }
            else if (type === "tuman") {
                this.tuman = e.target.value;
            }
        },
        onSumbit() {
            if (!this.firstName || !this.lastName || !this.tuman || !this.passport || !this.number || !this.rePassword) {
                this.error = "Barcha maydonlar talab qilinadi";
                return;
            }
            const user = {
                firstName: this.firstName,
                lastName: this.lastName,
                phone: `+998${this.number}`,
                password: this.password,
                passport: this.passport,
                place: {
                    region: this.tuman
                },
                type: this.yonalish,
                rol: 'student'
            };
            this.$store.dispatch("register", user)
                .then((res) => {
                    this.$router.push(`/profile/${res._id}`)
                }).catch((err) => {
                    this.error = err.message;
                });
        },
        onSumbitCode() {
            if (!this.token) {
                return;
            }
            this.$store.dispatch("sendToken", { id: this.id, token: this.token, userToken: this.userToken })
                .then(res => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
    watch: {
        rePassword(newValue) {
            if (newValue !== this.password) {
                this.error = "Parol xato"
            } else {
                this.error = ''
            }
        }
    },
    components: {
        Alert
    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.left {
    width: 50%;
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
    gap: 20px;
}

.btn {
    padding: 13px 30px;
    background-color: transparent;
    color: #2A8CFF;
    border: none;
    outline: 2px solid #2A8CFF;
    border-radius: 10px;
    filter: brightness(120%);
    transition: all .1s;
}

.btn:active {
    filter: brightness(80%);
}

@media only screen and (max-width:1200px) {
    .container {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
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

@media only screen and (max-width:500px) {
    form {
        flex-wrap: wrap;
        width: 100%;
    }

    .flex {
        flex-wrap: wrap;
    }
}
</style>