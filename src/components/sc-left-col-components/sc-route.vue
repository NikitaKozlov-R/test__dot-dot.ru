<template>
  <div class="sc-route">
    <step-title title="Маршрут" number="1" />
    <text-field title="Откуда" />
    <text-field title="Куда" />
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
}
</script>
