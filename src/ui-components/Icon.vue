<template>
    <p class="icon">
        <slot></slot>
    </p>
</template>
<script>
export default {
    name: 'Icon'
}
</script>
<style scoped>
.icon {
    color: #fff;
    border-radius: 50%;
    background-color: var(--black);
    font-size: 24px;
    cursor: pointer;
    user-select: none;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>