<template>
    <template v-if="!isLoading">
        <div class="container">
            <template v-if="error">
                <Alert :type="'danger'" :error="error" />
            </template>
            <form @submit.prevent>
                <div class="form">
                    <template v-if="!second">
                        <div class="form2">
                            <Input :maxlength="50" :type="'text'" :placeholder="'Ismingiz'" v-model="firstName" />
                            <Input :maxlength="50" :type="'text'" :placeholder="'Familiyangiz'" v-model="lastName" />
                            <Input :maxlength="50" :type="'text'" :placeholder="`Ochistivangiz`" v-model="otchest" />
                            <Input :maxlength="50" :type="'date'" :placeholder="`Tug'ilgan sana`" v-model="birth_of_day" />
                        </div>
                    </template>
                    <template v-else>
                        <div class="form2">
                            <div class="form-floatw">
                                <p>Manzil (hudud) </p>
                                <select @change="event => onChangeValue({ type: 'tuman', e: event })">
                                    <option v-for="viloyat in viloyatlar">{{ viloyat.tuman }}</option>
                                </select>
                            </div>
                            <Input :maxlength="50" :type="'text'" :placeholder="'Tuman (shahar)'" />
                            <Input :maxlength="9" :type="'text'" :placeholder="'Passport seriayasi'" v-model="passport" />
                            <div class="form-floatw">
                                <p>Talim tili</p>
                                <select @change="e => onChangeValue({ type: 'til', e: e })">
                                    <option>Uzbek tili</option>
                                    <option>Rus tili</option>
                                </select>
                            </div>
                            <Input :maxlength="9" :type="'number'" :placeholder="'Telefon nomer'" v-model="number" />
                            <div>
                                <p>Talim yonalishingiz</p>
                                <div class="items" v-for="yonalish in yonalishlar" :key="yonalish.id">
                                    <input type="radio" name="talim" @change="e => onChangeValue({ type: 'talim', e: e })"
                                        :id="yonalish.id" :value="yonalish.txt">
                                    <label :for="yonalish.id">{{ yonalish.txt }}</label>
                                </div>
                            </div>
                            <div>
                                <p>Talim turi</p>
                                <div>
                                    <div class="items" @click="e => onChangeValue({ type: 'yonalish', e: e })"
                                        v-for="{ ...rest } in prices">
                                        <input name="price" type="radio" :id="rest.id"
                                            :value="`${rest.txt}. ${rest.price}`">
                                        <label :for="rest.id">{{ rest.txt }} {{ rest.price }}</label>
                                    </div>
                                </div>
                            </div>
                            <Input :maxlength="120" :type="'password'" :placeholder="'Parol'" v-model="password" />
                        </div>
                    </template>
                </div>
                <div style="display: flex; justify-content: center;">
                    <button @click="onSumbit" class="btn2">{{ second ? "Royhattan o'tish" : 'Davom etish ' }}</button>
                </div>
            </form>
        </div>
    </template>
    <template v-else>
        <Loading />
    </template>
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
            birth_of_day: '',
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
            second: false,
            thred: false,
            tuman2: '',
            otchest: '',
            lang: 'Rus tili',
            passport: "",
            error: "",
            price: "Sintqi",
            rePassword: '',
            userToken: "",
            isLoading: false,
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
            if (this.second) {
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
                        region: this.tuman,
                        tuman: this.tuman2
                    },
                    type: this.yonalish,
                    lang: this.lang,
                    time: this.price,
                    price: this.kontrat,
                    rol: 'student',
                    date_of_birth: this.birth_of_day,
                    father_name: this.otchest
                };
                this.$store.dispatch("register", user)
                    .then((res) => {
                        this.$router.push(`/profile/${res._id}`)
                    }).catch((err) => {
                        this.error = err.message;
                    });
            } else {
                if (!this.firstName || !this.lastName || !this.otchest || !this.birth_of_day) {
                    this.error = 'Barcha maydonlar talab qilinadi'
                    return
                }
                this.second = true
                this.error = ''
            }
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
form {
    position: relative;
    padding: 50px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
}

select {
    width: 100%;
    padding: 10px 12px;
    outline: 1.3px solid var(--black);
    border-radius: 4px;
    border: none;
    background-color: transparent;
    font-size: 17px;
    transition: all .15s;
    color: #495057;
}

select:focus{
    outline-width: 4px;
    background-color: #fff;
    color: #000;
}

.form2 {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    width: 100%;
}

.items {
    display: flex;
    gap: 5px;
    color: #fff;
}

select:focus {
    outline: 4px solid var(--bs-gray-black);
}

.form-floatw {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.btn2 {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: transparent;
    border: none;
    transition: all .1s;
    outline: 2px solid #495057;
}

.btn2:hover {
    outline-width: 4px;
    background-color: #495057;
    color: #fff;
}

.form {}

.post {
    position: absolute;
    top: 0;
}

@media only screen and (max-width:780px) {
    .form {
        grid-template-columns: auto auto;
    }

    .items {
        color: #495057 !important;
    }
}
</style>