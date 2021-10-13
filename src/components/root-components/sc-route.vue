<template>
  <div class="sc-route">
    <step-title title="Маршрут" number="1" />
    <text-field v-model="routeFromModel" title="Откуда" />
    <text-field v-model="routeToModel" title="Куда" />
  </div>
</template>

<script>
import StepTitle from '@/components/base-components/step-title.vue'
import TextField from '@/components/base-components/text-field.vue'

export default {
  components: {
    StepTitle,
    TextField,
  },
  props: {
    routeFrom: {
      type: String,
      default: '',
      required: false,
    },
    routeTo: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    routeFromModel: {
      get() {
        return this.routeFrom
      },
      set(value) {
        this.$emit('update:routeFrom', value)
      },
    },
    routeToModel: {
      get() {
        return this.routeTo
      },
      set(value) {
        this.$emit('update:routeTo', value)
      },
    },
  },
}
</script>

<style>
.sc-route {
  width: 100%;
  margin-bottom: 40px;
}
</style>
