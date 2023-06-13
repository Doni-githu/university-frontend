<template>
    <template v-if="!isLoading">
        <div class="container">
            <template v-if="error">
                <Alert :type="'danger'" :error="error" />
            </template>
            <form @submit.prevent>
                <div class="form">
                    <template v-if="second">
                        <div class="form2">
                            <Input :maxlength="50" :type="'text'" :placeholder="'Ismi'" v-model="firstName" />
                            <Input :maxlength="50" :type="'text'" :placeholder="'Familiya'" v-model="lastName" />
                            <Input :maxlength="50" :type="'text'" :placeholder="`Otasining ismi`" v-model="otchest" />
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
                            <Input :maxlength="50" :type="'text'" :placeholder="'Tuman (shahar)'" v-model="tuman2" />
                            <Input :maxlength="9" :type="'text'" :placeholder="'Passport seriyasi'" v-model="passport" />
                            <div class="form-floatw">
                                <p>Ta'lim tili</p>
                                <select @change="e => onChangeValue({ type: 'til', e: e })">
                                    <option>O'zbek tili</option>
                                    <option>Rus tili</option>
                                </select>
                            </div>
                            <Input :maxlength="9" :type="'tel'" :placeholder="'Telefon raqam'" v-model="number" />
                            <div class="form-floatw">
                                <p>Ta'lim yo'nalishi</p>
                                <select @change="e => onChangeValue({ type: 'talim', e: e })">
                                    <option v-for="yonalish in yonalishlar" :value="`${yonalish.txt}`" :key="yonalish.id">{{
                                        yonalish.txt }}</option>
                                </select>
                            </div>
                            <div class="form-floatw">
                                <p>Ta'lim turi</p>
                                <select @change="e => onChangeValue({ type: 'yonalish', e: e })">
                                    <option v-for="price in prices" :value="`${price.txt}. ${price.price}`" :key="price.id">
                                        {{ price.txt }}</option>
                                </select>
                            </div>
                            <Input :maxlength="120" :type="'password'" :placeholder="'Parol'" v-model="password" />
                        </div>
                    </template>
                </div>
                <div style="display: flex; justify-content: center;">
                    <button @click="onSumbit" class="btn2">{{ second ? "Ro'yxatdan o'tish" : 'Davom etish ' }}</button>
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
                    txt: 'Moliya va moliyaviy texnologiyalar',
                    id: 1
                },
                {
                    txt: 'Buxgalteriya hisobi va audit',
                    id: 2
                },
                {
                    txt: 'Pedagogika va psixologiya',
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
                    txt: 'I.T (dasturiy injiniring)',
                    id: 6
                },
                {
                    txt: 'Filologiya',
                    id: 7
                }
            ],
            birth_of_day: '',
            yonalish: "Moliya va moliyaviy texnologiyalar",
            kontrat: '11 800 000',
            prices: [
                {
                    txt: 'Kunduzgi',
                    price: '14 000 000',
                    id: 2
                },
                {
                    txt: 'Sirtqi',
                    price: '11 800 000',
                    id: 1,
                },
                {
                    txt: 'Masofaviy',
                    price: '11 800 000',
                    id: 3,
                }
            ],
            second: false,
            thred: false,
            tuman2: '',
            otchest: '',
            lang: "O'zbek tili",
            passport: "",
            error: "",
            price: "Sirtqi",
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
    inject: ['data'],
    watch: {
        yonalish(value) {
            const newData = this.data.filter(c => c.txt === value)[0].prices
            this.prices = newData
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
                if (!this.firstName || !this.lastName || !this.tuman || !this.passport || !this.number || !this.price || !this.lang || !this.tuman2) {
                    this.error = "Barcha maydonlarni to'ldirish talab qilinadi";
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
                this.isLoading = true
                this.$store.dispatch("register", user)
                    .then((res) => {
                        this.isLoading = false
                        this.$router.push(`/profile/${res._id}?message=Muvaffaqiyatli RO'YXATDAN O'TTINGIZ`)
                    }).catch((err) => {
                        this.isLoading = false
                        this.error = err.message;
                    });
            } else {
                if (!this.firstName || !this.lastName || !this.otchest || !this.birth_of_day) {
                    this.error = `Barcha maydonlar to'ldirish talab qilinadi`
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
    color: #000;
    background-color: #fff;
}

select:focus {
    outline-width: 4px;
}

.form2 {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    row-gap: 20px;
    column-gap: 10px;
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
    padding: 10px;
    color: #fff;
    border-radius: 15px;
    background-color: rgba(39, 40, 40, 0.567);
}


.btn2 {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #495057;
    border: none;
    color: #fff;
    transition: all .1s;
    outline: 2px solid #495057;
}

.btn2:hover {
    outline-width: 4px;
    background-color: #495057;
    color: #fff;
}

.post {
    position: absolute;
    top: 0;
}

@media only screen and (max-width:780px) {
    .form2 {
        grid-template-columns: auto !important;
    }

    form {
        padding-top: 10px;
    }

    .items {
        color: #495057 !important;
    }
}
</style>