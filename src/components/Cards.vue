<template>
    <div class="cards">
        <div class="cards-container">
            <div class="card" v-for="item in data" :key="item.txt">
                <h3 class="p1">{{ item.txt }}</h3>
                <p class="p3">TA'LIM SHAKLLARI</p>
                <div style="display: grid; grid-template-columns: auto auto auto; column-gap: 15px;">
                    <p v-for="price in item.prices">{{ price.txt }}</p>
                    <p v-for="price in item.prices">{{ price.price }}</p>
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
    inject: ['data'],
}
</script>
<style scoped>
.cards {
    width: 100%;
    padding: 50px 0;
}

.cards-container {
    width: 90%;
    justify-content: space-evenly;
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
    color: #fff;
    align-items: center;
    background: #EEEDED;
    color: #000;
    border-radius: 40px;
}

@media only screen and (max-width:1000px) {
    .cards {
        justify-content: space-between;
    }

    .cards-container {
        justify-content: center;
    }
}
</style>