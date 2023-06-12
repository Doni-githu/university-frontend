<template>
    <div class="form-float">
        <label :for="placeholder">{{ placeholder }}</label>
        <div style="display: flex; align-items: center;">
            <template v-if="placeholder === 'Telefon raqam'">
                <p
                    style="border-top-left-radius: 4px; border-bottom-left-radius: 4px; padding: 10px 12px; background-color: var(--bs-gray-dark); outline: 2px solid var(--bs-gray-dark); color: #fff;">
                    +998</p>
            </template>
            <input :maxlength="maxlength" :class="placeholder === 'Telefon raqam' ? 'borderLeft' : ''" :type="type"
                :id="placeholder" :value="modelValue" @input="onChangeInput">
        </div>
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
        onChangeInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style scoped>
input {
    width: 100%;
    padding: 10px 12px;
    outline: 1.3px solid var(--bs-gray-dark);
    border-radius: 4px;
    border: none;
    background-color: transparent;
    font-size: 17px;
    transition: all .15s;
    color: #000;
    background-color: #fff;
}

input:focus {
    outline: 4px solid var(--bs-gray-dark);
    color: #000;
}



.form-float {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}



p {
    margin-bottom: 0;
}

.borderLeft {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

label {
    color: var(--bs-dark) !important;
    font-style: normal;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
</style>