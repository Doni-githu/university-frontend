<template>
    <footer>
        <div class="footer-container">
            <div class="list">
                <p class="title">Palite</p>
                <div class="items">
                    <a href="#">Institut haqida</a>
                    <a href="#">Ariza beruvchi</a>
                    <a href="#">Talabalar</a>
                    <a href="#">Kurslar</a>
                    <p href="#">Bog'lanish uchun telefon raqam +998500016555</p>
                </div>
            </div>
            <div class="buttons">
                <p class="title">Obuna bo'ling</p>
                <div class="items2">
                    <a href="https://t.me/nukusinnovatsioninstitut">
                        <img src="/tele.png" alt="Telegram">
                        <span>Telegram</span>
                    </a>
                    <a href="https://www.instagram.com/nukus.innovatsion.institute/">
                        <img src="/insta.png" alt="Instagram">
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped>
footer {
    width: 100%;
    min-height: 356px;
    background-color: #141414;
}

footer .footer-container {
    width: 90%;
    padding-top: 46px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.title {
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
}

.items2 {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 37px;
}

.items2 a {
    display: flex;
    gap: 15px;
    text-decoration: none;
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
}

.items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.items a,
.items p{
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>