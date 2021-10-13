<template>
  <step-title title="Время" number="4" />
  <div class="sc-time">
    <base-radio title="Когда прибыть на точку" title-right="700 км в день" />
    <base-radio title="Когда прибыть на точку" title-right="700 км в день" />
  </div>
</template>

<script>
import StepTitle from '@/components/base-components/step-title.vue'
import BaseRadio from '@/components/base-components/base-radio.vue'

export default {
  components: {
    StepTitle,
    BaseRadio,
  },
}
</script>

<style></style>
