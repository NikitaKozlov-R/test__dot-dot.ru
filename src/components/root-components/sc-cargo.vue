<template>
  <div class="sc-cargo">
    <step-title title="Груз" number="3" />
    <div class="sc-cargo__container">
      <base-dropdown
        v-model="typeOfCargoModel"
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
          v-model="hazardClassModel"
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
        />
      </div>
      <div class="sc-cargo__container--straight-width">
        <text-field v-model="advertisedPriceModel" title="Объявленная ценность, ₽" placeholder="≥ 1" />
      </div>
    </div>
    <div class="sc-cargo__container">
      <base-checkbox v-model="tempRegimeModel" massage="Требуется температурный режим" />
    </div>
    <transition name="fade">
      <div v-if="tempRegime" class="sc-cargo__container">
        <div class="temp-regime">
          <div class="temp-regime__item">
            <text-field v-model="tempRegimeToModel" title="От, °C" placeholder="-20" />
          </div>
          <div class="temp-regime__item">
            <text-field v-model="tempRegimeFromModel" title="До, °C" placeholder="+23" />
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
  props: {
    typeOfCargo: {
      type: String,
      default: '',
      required: false,
    },
    hazardClass: {
      type: String,
      default: '',
      required: false,
    },
    advertisedPrice: {
      type: String,
      default: '',
      required: false,
    },
    tempRegime: {
      type: Boolean,
      default: false,
      required: false,
    },
    tempRegimeFrom: {
      type: String,
      default: '',
      required: false,
    },
    tempRegimeTo: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    typeOfCargoModel: {
      get() {
        return this.typeOfCargo
      },
      set(value) {
        this.$emit('update:typeOfCargo', value)
      },
    },
    hazardClassModel: {
      get() {
        return this.hazardClass
      },
      set(value) {
        this.$emit('update:hazardClass', value)
      },
    },
    advertisedPriceModel: {
      get() {
        return this.advertisedPrice
      },
      set(value) {
        this.$emit('update:advertisedPrice', value)
      },
    },
    tempRegimeModel: {
      get() {
        return this.tempRegime
      },
      set(value) {
        this.$emit('update:tempRegime', value)
      },
    },
    tempRegimeFromModel: {
      get() {
        return this.tempRegimeFrom
      },
      set(value) {
        this.$emit('update:tempRegimeFrom', value)
      },
    },
    tempRegimeToModel: {
      get() {
        return this.tempRegimeTo
      },
      set(value) {
        this.$emit('update:tempRegimeTo', value)
      },
    },
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

@media screen and (max-width: 900px) {
  .sc-cargo__container--2item {
    width: calc(100% - 12px);
  }
  .sc-cargo__container {
    width: 100%;
  }
}
</style>
