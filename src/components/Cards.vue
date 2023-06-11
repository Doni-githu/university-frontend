<template>
    <div class="cards">
        <div class="cards-container">
            <div class="card" v-for="item in arr" :key="item.txt">
                <h3 class="p1">{{ item.txt }}</h3>
                <em class="p2">faoliyat yo'nalishi bo'yicha</em>
                <p class="p3">TA'LIM SHAKLLARI</p>
                <div class="time">
                    <p v-for="price in item.prices" :key="price.id">{{ price.txt }}</p>
                </div>
                <p>To'lov Shartnoma</p>
                <div class="time">
                    <p v-for="price in item.prices" :key="price.id">{{ price.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from './Card/Card.vue';

export default {
    components: {
        Card
    },
    data() {
        return {
            arr: [
                {
                    txt: "Moliya va moliyaviy tenxnalogiyalar",
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
                    ]
                },
                {
                    txt: 'Buxgalteriya hisobi va audit',
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
                    ]
                },
                {
                    txt: 'Pedagogika va psixalogiya',
                    prices: [
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
                },
                {
                    txt: "Boshlang'ich ta'lim",
                    prices: [
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
                },
                {
                    txt: "I.T (dasturiy injinering)",
                    prices: [
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
                },
                {
                    txt: "Filalogigya",
                    prices: [
                        {
                            txt: 'Kundizgi',
                            price: '12 000 000',
                            id: 2
                        },
                    ]
                },
            ]
        }
    },
}
</script>
<style scoped>
.cards {
    width: 100%;
    padding: 50px 0;
}

.cards-container {
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}

.time {
    display: flex;
}

.time p {
    padding: 5px 10px;
    font-size: 18px;
    border-right: 1px solid var(--black);
}

.time p:last-child {
    border-right: none;
}

.card {
    width: 320px;
    text-align: center;
    height: 320px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EEEDED;
    box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

@media only screen and (max-width:1000px) {
    .cards{
        justify-content: space-between;
    }
    .cards-container{
        justify-content: center;
    }
}
</style>