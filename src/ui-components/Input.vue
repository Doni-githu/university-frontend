<template>
    <div class="form-float">
        <div style="display: flex; align-items: center;">
            <template v-if="placeholder === 'Telefon nomer'">
                <p style="border-top-left-radius: 4px; border-bottom-left-radius: 4px; padding: 10px 12px; background-color: #2A8CFF; outline: 2px solid #2A8CFF; color: #fff;">+998</p>
            </template>
            <input :maxlength="maxlength" :class="placeholder === 'Telefon nomer' ? 'borderLeft': ''" :type="type" :id="placeholder" :value="modelValue" @input="onChangeInput">
        </div>
        <label :for="placeholder">{{ placeholder }}</label>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true
        },
        maxlength: [Number],
        modelValue: [Number, String]
    },
    methods: {
        onChangeInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style scoped>
input{
    width: 100%;
    padding: 10px 12px;
    outline: 1.3px solid #2A8CFF;
    border-radius: 4px;
    border: none;
    font-size: 17px;
    transition: all .15s;
    color: #2A8CFF;
}
input:focus{
    outline: 4px solid #2A8CFF;
}

.form-float{
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
}
p{
    margin-bottom: 0;
}
.borderLeft{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

label{
    color: #2A8CFF;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}


</style>