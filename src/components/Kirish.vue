<template>
    <div class="kirish">
        <div class="box">
            <h1 style="font-weight: 600;">Nukus innovatsion instituti Guliston qabuli</h1>
            <div class="btn2">
                <button>
                    <a href="#end2">Ta'lim yo'nalishlari</a>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.box {
    padding: 25px 30px;
    color: #fff;
    text-align: center;
    background: rgba(39, 40, 40, 0.567);
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 15px;
    margin-top: 120px;
}

a{
    text-decoration: none;
    color: white;
}

.btn2 button {
    border-radius: 10px;
    border: none;
    padding: 10px 15px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    outline: 0px solid transparent;
    transition: all .15s;
}

.btn2 button:hover {
    outline: 4px solid rgba(0, 0, 0, 0.5);
}


.kirish {
    width: 90%;
    margin: 0 auto;
}
</style>