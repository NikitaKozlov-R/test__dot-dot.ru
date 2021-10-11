<template>
  <div class="sc-route">
    <step-title title="Маршрут" number="1" />
    <text-field v-model="formData.from" title="Откуда" />
    <text-field v-model="formData.to" title="Куда" />
  </div>
</template>

<script>
import StepTitle from '@/components/sc-left-col-components/step-title.vue'
import TextField from '@/components/sc-left-col-components/text-field.vue'

export default {
  components: {
    StepTitle,
    TextField,
  },
  data() {
    return {
      formData: {
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
