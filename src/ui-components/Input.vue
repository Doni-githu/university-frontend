<template>
    <div class="form-float">
        <div style="display: flex; align-items: center;">
            <template v-if="placeholder === 'Telefon nomer'">
                <p
                    style="border-top-left-radius: 4px; border-bottom-left-radius: 4px; padding: 10px 12px; background-color: var(--black); outline: 2px solid var(--black); color: #fff;">
                    +998</p>
            </template>
            <input :maxlength="maxlength" :class="placeholder === 'Telefon nomer' ? 'borderLeft' : ''" :type="type"
                :id="placeholder" :value="modelValue" @input="onChangeInput">
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
    outline: 1.3px solid var(--black);
    border-radius: 4px;
    border: none;
    background-color: transparent;
    font-size: 17px;
    transition: all .15s;
    color: var(--black);
}

input:focus {
    outline: 4px solid var(--black);
}

.form-float {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
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
    color: var(--black);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}</style>