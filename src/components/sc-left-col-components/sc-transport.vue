<template>
  <step-title title="Транспорт" number="2" />
  <div class="sc-transporn__container">
    <base-dropdown
      title="Грузоподъёмность"
      placeholder="Не выбранa"
      :options="[
        { id: 1, item: 'Вариант 1' },
        { id: 2, item: 'Вариант 2' },
        { id: 3, item: 'Вариант 3' },
        { id: 4, item: 'Вариант 4' },
        { id: 5, item: 'Вариант 5' },
      ]"
    ></base-dropdown>
    <base-dropdown
      title="Способ погрузки"
      placeholder="Не выбран"
      :options="[
        { id: 1, item: 'Вариант 1' },
        { id: 2, item: 'Вариант 2' },
        { id: 3, item: 'Вариант 3' },
        { id: 4, item: 'Вариант 4' },
        { id: 5, item: 'Вариант 5' },
      ]"
    ></base-dropdown>
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
