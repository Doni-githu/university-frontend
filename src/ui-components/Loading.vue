<template>
    <div style="display: flex; justify-content: center; margin-top: 20%;">
        <div class="spinner">

        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading'
}
</script>
<style scoped>
.spinner{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    animation: id .6s infinite linear;
    border: 4px solid var(--blue);
    border-left-color: transparent !important;
}

@keyframes id {
    0%{
        transform: rotate(0deg);
        
    }100%{
        transform: rotate(360deg);
    }
}
</style>