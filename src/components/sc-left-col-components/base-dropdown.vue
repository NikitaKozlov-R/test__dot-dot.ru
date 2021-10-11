<template>
  <div class="base-dropdown">
    <label class="" for="">{{ title }}</label>
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
      type: Object,
      default: () => {},
    },
  },
}
</script>
