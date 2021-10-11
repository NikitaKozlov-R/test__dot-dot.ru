<template>
  <step-title title="Транспорт" number="2" />
  <base-dropdown
    title="Грузоподъёмность"
    placeholder="Не выбрано"
    :options="[
      { id: 1, item: 'Вариант 1' },
      { id: 2, item: 'Вариант 2' },
      { id: 3, item: 'Вариант 3' },
      { id: 4, item: 'Вариант 4' },
      { id: 5, item: 'Вариант 5' },
    ]"
  ></base-dropdown>
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
