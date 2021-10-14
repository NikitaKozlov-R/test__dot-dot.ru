<template>
  <div class="base-hint">
    <p class="base-hint__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.base-hint {
  width: 100%;
  background-color: var(--COLOR-SUBSTRATE);
  padding: 24px;
  margin-top: 128px;
}
.base-hint__text {
  font-size: 15px;
  letter-spacing: normal;
  line-height: 120%;
  color: #fff;
}
@media screen and (max-width: 900px) {
  .base-hint {
    margin-top: 0;
  }
}
</style>
