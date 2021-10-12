<template>
  <step-title title="Транспорт" number="2" />
  <div class="sc-transporn__container">
    <base-dropdown
      title="Грузоподъёмность"
      :options="['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4', 'Вариант 5']"
      :default="'Не выбрана'"
      class="select"
    />
    <base-dropdown
      title="Способ погрузки"
      :options="['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4', 'Вариант 5']"
      :default="'Задняя'"
      class="select"
    />
  </div>
</template>

<script>
import StepTitle from '@/components/base-components/step-title.vue'
import BaseDropdown from '@/components/base-components/base-dropdown.vue'

export default {
  components: {
    StepTitle,
    BaseDropdown,
  },
}
</script>

<style>
.sc-transporn__container {
  margin-bottom: 40px;
  width: calc(50% + 12px);
  display: flex;
}
@media screen and (max-width: 900px) {
  .sc-transporn__container {
    width: 100%;
  }
}
</style>
