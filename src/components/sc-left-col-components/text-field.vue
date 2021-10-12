<template>
  <div class="text-field">
    <label class="text-field__label" :for="title">{{ title }}</label>
    <input :id="title" v-model="model" class="text-field__input" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    placeholder: {
      required: false,
      default: '',
      type: String,
    },
    modelValue: {
      required: false,
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<style>
.text-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.text-field__label {
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 8px;
  letter-spacing: normal;
}
.text-field__input {
  height: 44px;
  font-size: 2rem;
  outline: none;
  border: none;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding-left: 16px;
}
.text-field__input:focus {
  border: 1px solid var(--COLOR-PRIMARY);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px var(--COLOR-PRIMARY);
  outline: 0 none;
}
</style>
