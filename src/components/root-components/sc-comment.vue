<template>
  <div class="sc-component">
    <base-textarea
      title="Комментарий к заказу"
      placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу"
    />
  </div>
</template>

<script>
import BaseTextarea from '@/components/base-components/base-textarea.vue'

export default {
  components: {
    BaseTextarea,
  },
}
</script>

<style>
.sc-component {
  width: 100%;
}
</style>
