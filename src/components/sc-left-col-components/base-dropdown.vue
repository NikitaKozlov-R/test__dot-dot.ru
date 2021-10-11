<template>
  <div class="base-dropdown">
    <label class="base-dropdown__title" :for="title">{{ title }}</label>
    <select :id="title" class="base-dropdown__list">
      <option disabled selected hidden>{{ placeholder }}</option>
      <option
        v-for="item in options"
        :key="item.id"
        :value="item.item"
        class="base-dropdown__list-item"
        v-text="item.item"
      ></option>
    </select>
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
      required: true,
      type: String,
    },
    options: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.base-dropdown {
  width: 172px;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
}
.base-dropdown__title {
  font-size: 2rem;
  color: #fff;
  letter-spacing: normal;
  margin-bottom: 8px;
}
.base-dropdown__list {
  width: 100%;
  height: 44px;
  font-size: 2rem;
  padding: 0 16px;
}
.base-dropdown__list-item {
  font-size: 2rem;
}
</style>
