<template>
  <step-title title="Транспорт" number="2" />
  <div class="sc-transporn__container">
    <base-dropdown
      title="Грузоподъёмность"
      :options="['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4', 'Вариант 5']"
      :default="'Не выбрана'"
      class="select"
      @input="alert(displayToKey($event))"
    />
  </div>
</template>

<script>
import StepTitle from '@/components/sc-left-col-components/step-title.vue'
import BaseDropdown from '@/components/sc-left-col-components/base-dropdown.vue'

export default {
  components: {
    StepTitle,
    BaseDropdown,
  },
}
</script>

<style>
.sc-transporn__container {
  width: 100%;
  display: flex;
  margin-bottom: 40px;
}
</style>
