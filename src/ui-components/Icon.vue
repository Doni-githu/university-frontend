<template>
    <div class="icon">
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<script>
export default {
    name: 'Icon'
}
</script>
<style scoped>
.icon{
    color: #fff;
    border-radius: 50%;
    background-color: var(--blue);
    font-size: 20px;
    cursor: pointer;
    user-select: none;
}

.icon p{
    padding: 10px 18px;
}
</style>