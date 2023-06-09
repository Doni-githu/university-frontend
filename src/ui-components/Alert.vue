<template>
    <div :class="`alert alert-${type}`" role="alert">
        {{ error }}
    </div>
</template>
<script>
export default {
    props: {
        error: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }
}
</script>
<style></style>