<template>
  <div class="base-radio">
    <div class="base-radio__title">
      <p class="base-radio__title-text">{{ title }}</p>
      <p class="base-radio__title-text">{{ titleRight }}</p>
    </div>
    <div class="base-radio__container">
      <div class="base-radio__input">
        <input :id="uniqueId" class="base-radio__input-radio" type="radio" />
        <label class="base-radio__input-label" :for="uniqueId">Адрес не указан</label>
      </div>
      <button class="base-radio__button">НЕ ВЫБРАНО</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      default: '',
      type: String,
    },
    titleRight: {
      required: false,
      default: '',
      type: String,
    },
    uniqueId: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
.base-radio {
  width: 100%;
}
.base-radio__title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.base-radio__title-text {
  font-size: 14px;
  color: #fff;
  letter-spacing: normal;
}
.base-radio__container {
  background-color: var(--COLOR-SUBSTRATE);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 16px;
}
.base-radio__input {
  display: flex;
  align-items: center;
}
.base-radio__input-label {
  font-size: 2rem;
  color: #fff;
  letter-spacing: normal;
  margin-top: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.base-radio__input-label:hover {
  color: var(--COLOR-SECONDARY);
}
.base-radio__button {
  height: 24px;
  color: #fff;
  font-size: 14px;
  letter-spacing: normal;
  background-color: var(--COLOR-SECONDARY-SUBSTRATE);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 14px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.base-radio__button:hover {
  background-color: var(--COLOR-SUBSTRATE);
  -webkit-box-shadow: 0px 0px 0px 2px var(--COLOR-PRIMARY);
  -moz-box-shadow: 0px 0px 0px 2px var(--COLOR-PRIMARY);
  box-shadow: 0px 0px 0px 2px var(--COLOR-PRIMARY);
}
.base-radio__button:focus {
  background-color: var(--COLOR-SUBSTRATE);
  -webkit-box-shadow: 0px 0px 0px 2px var(--COLOR-PRIMARY);
  -moz-box-shadow: 0px 0px 0px 2px var(--COLOR-PRIMARY);
  box-shadow: 0px 0px 0px 2px var(--COLOR-PRIMARY);
}
.base-radio__input-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.base-radio__input-radio + .base-radio__input-label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.base-radio__input-radio + .base-radio__input-label::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 4px solid #fff;
  border-radius: 50%;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.base-radio__input-radio:not(:disabled):not(:checked) + .base-radio__input-label:hover::before {
  border-color: var(--COLOR-SECONDARY);
}
.base-radio__input-radio:checked + .base-radio__input-label::before {
  border-color: var(--COLOR-PRIMARY);
}
</style>
