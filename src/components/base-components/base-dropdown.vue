<template>
  <div class="base-dropdown">
    <label class="base-dropdown__title" :for="title">{{ title }}</label>
    <div class="base-dropdown__container" :tabindex="tabindex" @blur="open = false">
      <div class="base-dropdown__selected" :class="{ open: open }" @click="open = !open">
        <span class="base-dropdown__selected-text">{{ selected }}</span>
        <div class="base-dropdown__arrow-wrapper">
          <div class="base-dropdown__arrow" :class="{ 'base-dropdown__arrow--rotated': open }"></div>
        </div>
      </div>
      <div class="base-dropdown__items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          class="base-dropdown__item-wrapper"
          @click="handleOptionSelect(option)"
        >
          <span class="base-dropdown__item">{{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
      open: false,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },

  methods: {
    handleOptionSelect(option) {
      this.selected = option
      this.open = false
      this.$emit('input', option)
    },
  },
}
</script>

<style scoped>
.base-dropdown {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
}
.base-dropdown__title {
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
  letter-spacing: normal;
}

.base-dropdown__container {
  position: relative;
  width: 100%;
  min-width: 100%;
  text-align: left;
  outline: none;
  height: 44px;
  line-height: 44px;
  letter-spacing: normal;
}

.base-dropdown__selected {
  background: #fff;
  color: #000;
  display: flex;
  padding-left: 2em;
  padding-right: 1em;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.base-dropdown__selected-text {
  font-size: 2rem;
  padding-right: 3em;
  white-space: nowrap;
  text-overflow: clip;
  user-select: none;
  overflow: hidden;
}

.base-dropdown__selected-text::after {
  content: '';
  position: absolute;
  top: 0;
  right: 3em;
  left: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 80%,
    rgba(255, 255, 255, 0.9) 90%,
    rgba(255, 255, 255, 1) 100%
  );
}

.base-dropdown__arrow-wrapper {
  padding: 0 2em;
}

.base-dropdown__arrow {
  width: 0;
  height: 0;
  margin-top: 4px;
  border: 5px solid transparent;
  border-color: #000 transparent transparent transparent;
}

.base-dropdown__arrow--rotated {
  transform: rotate(180deg);
  margin-top: -4px;
}

.base-dropdown__selected.open {
  border: none;
  z-index: 2;
  position: relative;
}

.base-dropdown__items {
  color: #000;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.base-dropdown__item-wrapper {
  color: #000;
  font-size: 2rem;
  cursor: pointer;
  height: 28px;
  line-height: 28px;
  position: relative;
  padding-right: 1em;
  min-width: 100%;
}

.base-dropdown__item {
  display: block;
  padding: 0 1em;
  user-select: none;
  white-space: nowrap;
  text-overflow: clip;
  overflow: hidden;
}

.base-dropdown__item-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 80%,
    rgba(255, 255, 255, 0.9) 90%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 1;
}

.base-dropdown__item-wrapper:hover {
  background-color: var(--COLOR-PRIMARY);
  color: #fff;
  text-overflow: ellipsis;
  width: max-content;
}

.base-dropdown__item-wrapper:hover::after {
  opacity: 0;
}

.selectHide {
  display: none;
}
</style>
