<template>
  <div class="base-dropdown">
    <label class="base-dropdown__title" :for="title">{{ title }}</label>
    <div class="base-dropdown__container" :tabindex="tabindex" @blur="open = false">
      <div class="base-dropdown__selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="base-dropdown__items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          class="base-dropdown__items--drop"
          @click="
            ;(selected = option), (open = false)
            $emit('input', option)
          "
        >
          {{ option }}
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
  text-align: left;
  outline: none;
  height: 44px;
  line-height: 44px;
  letter-spacing: normal;
}

.base-dropdown__selected {
  background-color: #fff;
  color: #000;
  padding-left: 16px;
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.base-dropdown__selected.open {
  border: none;
}

.base-dropdown__selected:after {
  position: absolute;
  content: '';
  top: 20px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #000 transparent transparent transparent;
}
.base-dropdown__selected.open:after {
  transform: rotate(180deg);
  top: 15px;
}

.base-dropdown__items {
  color: #000;
  /* overflow: hidden; */
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  width: auto;
}

.base-dropdown__items--drop {
  color: #000;
  font-size: 2rem;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  height: 28px;
  line-height: 28px;
}

.base-dropdown__items--drop:hover {
  background-color: var(--COLOR-PRIMARY);
  color: #fff;
}

.selectHide {
  display: none;
}
</style>
