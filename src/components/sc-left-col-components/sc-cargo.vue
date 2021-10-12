<template>
  <step-title title="Груз" number="3" />
  <div class="sc-cargo__container">
    <base-dropdown
      title="Тип груза"
      :options="['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4', 'Вариант 5']"
      :default="'Не выбран'"
      class="select"
      @input="alert(displayToKey($event))"
    />
  </div>
  <div class="sc-cargo__container--2item">
    <div class="sc-cargo__container--straight-width">
      <base-dropdown
        title="Класс опасности"
        :options="[
          'Класс 5 — Окисляющие вещества и органические перекиси',
          'Вариант 2',
          'Вариант 3',
          'Вариант 4',
          'Вариант 5',
        ]"
        :default="'Класс 5 — Окисляющие вещества и органические перекиси'"
        class="select"
        @input="alert(displayToKey($event))"
      />
    </div>
    <!-- <text-field title="Откуда" /> -->
  </div>
</template>

<script>
import StepTitle from '@/components/sc-left-col-components/step-title.vue'
import BaseDropdown from '@/components/sc-left-col-components/base-dropdown.vue'
import TextField from '@/components/sc-left-col-components/text-field.vue'

export default {
  components: {
    StepTitle,
    BaseDropdown,
    // TextField,
  },
}
</script>

<style>
.sc-cargo__container {
  width: 50%;
  margin-bottom: 16px;
}
.sc-cargo__container--2item {
  margin-bottom: 40px;
  width: calc(50% + 12px);
  display: flex;
}
.sc-cargo__container--straight-width {
  width: calc(50% - 12px);
}
@media screen and (max-width: 900px) {
}
</style>
