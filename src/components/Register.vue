<template>
    <div class="container">
        <div class="left">
            <template v-if="error">
                <Alert :type="'danger'" :error="error" />
            </template>
            <template v-if="!id">
                <form @submit.prevent>
                    <div class="left-form">
                        <Input :maxlength="50" :type="'text'" :placeholder="'Ism'" v-model="firstName" />
                        <Input :maxlength="50" :type="'text'" :placeholder="'Familiya'" v-model="lastName" />
                        <Input :maxlength="9" :type="'text'" :placeholder="'Passport seriayasi'" v-model="passport" />
                        <div class="form-floatw">
                            <p>Manzil (viloyat) </p>
                            <select @change="event => onChangeValue({ type: 'tuman', e: event })">
                                <option v-for="viloyat in viloyatlar">{{ viloyat.tuman }}</option>
                            </select>
                        </div>
                        <Input :maxlength="9" :type="'number'" :placeholder="'Telefon nomer'" v-model="number" />
                        <Input :maxlength="120" :type="'password'" :placeholder="'Parol'" v-model="password" />
                    </div>
                    <div class="right-form">
                        <div class="form-floatw">
                            <p>Talim tili</p>
                            <select @change="e => onChangeValue({ type: 'til', e: e })">
                                <option>Uzbek tili</option>
                                <option>Rus tili</option>
                            </select>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 10px;">
                            <p>Talim yonalishi</p>
                            <div v-for="yonalish in yonalishlar" :key="yonalish.id" style="display: flex; gap: 5px;">
                                <input type="radio" name="talim" @change="e => onChangeValue({ type: 'talim', e: e })"
                                    :id="yonalish.id" :value="yonalish.txt">
                                <label :for="yonalish.id">{{ yonalish.txt }}</label>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 10px;">
                            <p>Talim vaqti</p>
                            <div @click="e => onChangeValue({ type: 'yonalish', e: e })" v-for="{ ...rest } in prices"
                                style="display: flex; gap: 5px;">
                                <input name="price" type="radio" :id="rest.id" :value="`${rest.txt}. ${rest.price}`">
                                <label :for="rest.id">{{ rest.txt }} {{ rest.price }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="end">
                        <button @click="onSumbit" style="width: 100%; margin-top: 2rem; margin-bottom: 2rem;"
                            class="btn2">Royxattan o'tish</button>
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
                console.dir(e.target)
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
    color: #fff !important;
    justify-content: center;
    align-items: center;
}
*{
    color: var(--black) !important;
}
.left {
    width: 50%;
}

.left-form {
    grid-area: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
}

.right-form {
    grid-area: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
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

.end {
    grid-area: end;
}

.right {
    width: 50%;
}

select {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    width: 100%;
    background-color: transparent;
    outline: 2px solid var(--black);
    transition: all .1s;
    color: var(--black);
    border-radius: 5px;
}

* {
    color: var(--black) !important;
}

select:focus {
    outline: 4px solid var(--black);
}

.form-floatw {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    color: var(--black);
}

.right img {
    width: 80%;
    height: 100%;
}

form {
    width: 100%;
    display: grid;
    grid-template-areas:
        "left right"
        "end end";
    column-gap: 16px;
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