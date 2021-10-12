<template>
  <div class="base-checbox__container">
    <input id="base-checkbox" v-model="model" class="base-checkbox" type="checkbox" />
    <label for="base-checkbox" class="base-checkbox__massage">{{ massage }}</label>
  </div>
</template>

<script>
export default {
  props: {
    massage: {
      type: String,
      required: true,
    },
    modelValue: {
      required: false,
      type: Boolean,
      default: false,
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
.base-checbox__container {
  display: flex;
  width: 100%;
  align-items: center;
}
.base-checkbox__massage {
  font-size: 14px;
  color: #fff;
  letter-spacing: normal;
  cursor: pointer;
}
.base-checkbox {
  width: 24px;
  height: 24px;
  margin: 0;
  margin-right: 12px;
  cursor: pointer;
}
.base-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.base-checkbox + .base-checkbox__massage {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.base-checkbox + .base-checkbox__massage::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 3px solid #fff;
  margin-right: 12px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70% 70%;
}
.base-checkbox:not(:disabled):not(:checked) + .base-checkbox__massage:hover::before {
  border-color: var(--COLOR-SECONDARY);
}
.base-checkbox:focus:not(:checked) + .base-checkbox__massage::before {
  border-color: var(--COLOR-PRIMARY);
}
.base-checkbox:checked + .base-checkbox__massage::before {
  border-color: var(--COLOR-PRIMARY);
  background-color: var(--COLOR-PRIMARY);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
