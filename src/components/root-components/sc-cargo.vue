<template>
  <step-title title="Груз" number="3" />
  <div class="sc-cargo__container">
    <base-dropdown
      title="Тип груза"
      :options="[
        'Вариант 1',
        'Вариант 2',
        'Вариант 3',
        'Вариант 4',
        'Вариант 5',
        'Вариант 6',
        'Вариант 7',
        'Вариант 8',
      ]"
      :default="'Не выбран'"
      class="select"
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
      />
    </div>
    <div class="sc-cargo__container--straight-width">
      <text-field title="Объявленная ценность, ₽" placeholder="≥ 1" />
    </div>
  </div>
  <div class="sc-cargo__container">
    <base-checkbox v-model="tempRegime" massage="Требуется температурный режим" />
  </div>
  <div class="sc-cargo__container">
    <temp-regime />
  </div>
</template>

<script>
import StepTitle from '@/components/base-components/step-title.vue'
import BaseDropdown from '@/components/base-components/base-dropdown.vue'
import TextField from '@/components/base-components/text-field.vue'
import BaseCheckbox from '@/components/base-components/base-checkbox.vue'
import TempRegime from '@/components/sc-cargo-components/temp-regime.vue'

export default {
  components: {
    StepTitle,
    BaseDropdown,
    TextField,
    BaseCheckbox,
    TempRegime,
  },
  data() {
    return {
      tempRegime: false,
    }
  },
}
</script>

<style>
.sc-cargo__container {
  width: 50%;
  margin-bottom: 16px;
}
.sc-cargo__container--2item {
  width: calc(50% - 12px);
  display: flex;
  justify-content: space-between;
}
.sc-cargo__container--straight-width {
  width: 50%;
  min-width: 50%;
  margin-right: 12px;
}
@media screen and (max-width: 900px) {
}
</style>
