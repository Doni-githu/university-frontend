<template>
    <div class="container">
        <div class="left">
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
                        <Input :maxlength="9" :type="'text'" :placeholder="'Passport seriayasi'" v-model="passport" />
                        <div class="form-floatw">
                            <p>Manzil (viloyat) </p>
                            <select @change="event => onChangeValue({ type: 'tuman', e: event })">
                                <option v-for="viloyat in viloyatlar">{{ viloyat.tuman }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex">
                        <Input :maxlength="9" :type="'number'" :placeholder="'Telefon nomer'" v-model="number" />
                        <div class="form-floatw">
                            <p>Talim yonalishi</p>
                            <select @change="event => onChangeValue({ type: 'talim', e: event })">
                                <option v-for="yonalish in yonalishlar" :key="yonalish.id">{{ yonalish.txt }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex">
                        <Input :maxlength="120" :type="'password'" :placeholder="'Parol'" v-model="password" />
                        <div class="form-floatw">
                            <p>Talim yonalishi</p>
                            <select @change="e => onChangeValue({ type: 'yonalish', e: e })">
                                <option v-for="price in prices" :key="price.id">
                                    {{ price.txt }}. {{ price.price }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="form-floatw">
                            <p>Talim yonalishi</p>
                            <select @change="e => onChangeValue({ type: 'til', e: e })">
                                <option disabled>Tilni tanlang</option>
                                <option>Rus tili</option>
                                <option>Uzbek tili</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button @click="onSumbit" style="width: 100%; margin-top: 2rem; margin-bottom: 2rem;"
                            class="btn btn-outline-primary">Yasash</button>
                    </div>
                </form>
            </template>
            <template v-else>
                <form @submit.prevent>
                    <Input :type="'text'" :placeholder="'Kodni yozing'" v-model="token" />
                    <button @click="onSumbitCode" class="btn btn-outline-primary">Otish</button>
                </form>
            </template>
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
            yonalishlar: [
                {
                    txt: 'Moliya va moliyaviy tenxnalogiyalar',
                    id: 1
                },
                {
                    txt: 'Buxgalteriya hisobi va audit',
                    id: 2
                },
                {
                    txt: 'Pedagogika va psixalogiya',
                    id: 3,
                },
                {
                    txt: "Boshlang'ich ta'lim",
                    id: 4
                },
                {
                    txt: "Maktabgacha ta'lim",
                    id: 5
                },
                {
                    txt: 'I.T (dasturiy injinering)',
                    id: 6
                },
                {
                    txt: 'Filalogigya',
                    id: 7
                }
            ],
            yonalish: "Moliya va moliyaviy tenxnalogiyalar",
            kontrat: '14 000 000',
            prices: [
                {
                    txt: 'Sintqi',
                    price: '14 000 000',
                    id: 1,
                },
                {
                    txt: 'Kundizgi',
                    price: '11 800 000',
                    id: 2
                },
            ],
            lang: 'Rus tili',
            passport: "",
            error: "",
            price: "Sintqi",
            rePassword: '',
            userToken: ""
        };
    },
    beforeCreate() {
        if (localStorage.getItem('token')) {
            this.$router.back()
        }
    },
    watch: {
        yonalish(value) {
            if (value === "Buxgalteriya hisobi va audit") {
                this.prices = [
                    {
                        txt: 'Sintqi',
                        price: '14 000 000',
                        id: 1,
                    },
                    {
                        txt: 'Kundizgi',
                        price: '11 800 000',
                        id: 2
                    },
                ]
            } else if (value === "Pedagogika va psixalogiya") {
                this.prices = [
                    {
                        txt: 'Sintqi',
                        price: '12 000 000',
                        id: 1,
                    },
                    {
                        txt: 'Kundizgi',
                        price: '9 800 000',
                        id: 2
                    },
                ]
            } else if (value === "Boshlang'ich ta'lim") {
                this.prices = [
                    {
                        txt: 'Sintqi',
                        price: '12 000 000',
                        id: 1,
                    },
                    {
                        txt: 'Kundizgi',
                        price: '9 800 000',
                        id: 2
                    },
                ]
            } else if (value === "Maktabgacha ta'lim") {
                this.prices = [
                    {
                        txt: 'Sintqi',
                        price: '12 000 000',
                        id: 1,
                    },
                    {
                        txt: 'Kundizgi',
                        price: '9 800 000',
                        id: 2
                    },
                ]
            } else if (value === "I.T (dasturiy injinering)") {
                this.prices = [
                    {
                        txt: 'Sintqi',
                        price: '12 000 000',
                        id: 1,
                    },
                    {
                        txt: 'Kundizgi',
                        price: '10 800 000',
                        id: 2
                    },
                ]
            } else if (value === 'Filalogigya') {
                this.prices = [
                    {
                        txt: 'Kundizgi',
                        price: '12 000 000',
                        id: 2
                    },
                ]
            }
        }
    },
    methods: {
        onChangeValue({ type, e }) {
            if (type === "value") {
                this.value = e.target.value;
            }
            else if (type === "tuman") {
                this.tuman = e.target.value;
            } else if (type === "talim") {
                this.yonalish = e.target.value
            } else if (type === 'yonalish') {
                this.price = e.target.value.split('. ')[0]
                this.kontrat = e.target.value.split('. ')[1]
            } else if (type === 'til') {
                this.lang = e.target.value
            }
        },
        onSumbit() {
            if (!this.firstName || !this.lastName || !this.tuman || !this.passport || !this.number || !this.price || !this.lang) {
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
                lang: this.lang,
                time: this.price,
                price: this.kontrat,
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
    width: 100%;
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
    width: 100%;
    flex-direction: column;
    gap: 10px;
    color: #2A8CFF;
}

.right img {
    width: 80%;
    height: 100%;
}

form {
    width: 100%;
    display: grid;
    row-gap: 10px;
    grid-template-columns: auto;
}

.flex {
    display: flex;
    gap: 20px;
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