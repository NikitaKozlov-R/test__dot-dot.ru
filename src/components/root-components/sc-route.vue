<template>
  <div class="sc-route">
    <step-title title="Маршрут" number="1" />
    <text-field v-model="formDataRoute.from" title="Откуда" />
    <text-field v-model="formDataRoute.to" title="Куда" />
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
  data() {
    return {
      formDataRoute: {
        from: '',
        to: '',
      },
    }
  },
}
</script>

<style>
.sc-route {
  width: 100%;
  margin-bottom: 40px;
}
</style>
