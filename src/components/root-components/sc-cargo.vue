<template>
  <div class="sc-cargo">
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
        @input="formDataCargo.typeOfCargo = $event"
      />
    </div>
    <div class="sc-cargo__container--2item">
      <div class="sc-cargo__container--straight-width">
        <base-dropdown
          title="Класс опасности"
          :options="[
            'Класс 5 — Окисляющие вещества и органические перекиси',
            'Класс 4 — Легко воспламеняющиеся твёрдые вещества',
            'Вариант 3',
            'Вариант 4',
            'Вариант 5',
          ]"
          :default="'Класс 5 — Окисляющие вещества и органические перекиси'"
          class="select"
          @input="formDataCargo.hazardClass = $event"
        />
      </div>
      <div class="sc-cargo__container--straight-width">
        <text-field v-model="formDataCargo.advertisedPrice" title="Объявленная ценность, ₽" placeholder="≥ 1" />
      </div>
    </div>
    <div class="sc-cargo__container">
      <base-checkbox v-model="formDataCargo.tempRegime" massage="Требуется температурный режим" />
    </div>
    <transition name="fade">
      <div v-if="formDataCargo.tempRegime" class="sc-cargo__container">
        <div class="temp-regime">
          <div class="temp-regime__item">
            <text-field v-model="formDataCargo.tempRegimeFrom" title="От, °C" placeholder="-20" />
          </div>
          <div class="temp-regime__item">
            <text-field v-model="formDataCargo.tempRegimeTo" title="До, °C" placeholder="+23" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import StepTitle from '@/components/base-components/step-title.vue'
import BaseDropdown from '@/components/base-components/base-dropdown.vue'
import TextField from '@/components/base-components/text-field.vue'
import BaseCheckbox from '@/components/base-components/base-checkbox.vue'

export default {
  components: {
    StepTitle,
    BaseDropdown,
    TextField,
    BaseCheckbox,
  },
  data() {
    return {
      formDataCargo: {
        typeOfCargo: '',
        hazardClass: '',
        advertisedPrice: '',
        tempRegime: false,
        tempRegimeFrom: '',
        tempRegimeTo: '',
      },
    }
  },
}
</script>

<style>
.sc-cargo {
  width: 100%;
  margin-bottom: 40px;
}
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
.temp-regime {
  width: 50%;
  display: flex;
}
.temp-regime__item {
  width: calc(100% - 6px);
  margin-right: 12px;
}

/* Стили для анимации */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 900px) {
  .sc-cargo__container--2item {
    width: calc(100% - 12px);
  }
  .sc-cargo__container {
    width: 100%;
  }
}
</style>
