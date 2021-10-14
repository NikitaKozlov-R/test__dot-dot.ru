<template>
  <div class="sc-component">
    <base-textarea
      v-model:comment="commentModel"
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
  props: {
    comment: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    commentModel: {
      get() {
        return this.comment
      },
      set(value) {
        this.$emit('update:comment', value)
      },
    },
  },
}
</script>

<style>
.sc-component {
  width: 100%;
}
</style>
