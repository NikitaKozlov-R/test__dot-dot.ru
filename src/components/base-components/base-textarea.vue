<template>
  <div class="base-textarea">
    <label class="base-textarea__title" for="base-textarea">{{ title }}</label>
    <textarea id="base-textarea" class="base-textarea__textarea" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    placeholder: {
      required: false,
      default: '',
      type: String,
    },
  },
}
</script>

<style>
.base-textarea {
  width: 100%;
}
.base-textarea__title {
  color: #fff;
  letter-spacing: normal;
  margin-bottom: 8px;
  font-size: 14px;
  cursor: pointer;
  display: block;
}
.base-textarea__textarea {
  width: 100%;
  height: 80px;
  resize: none;
  color: #000;
  font-size: 2rem;
  letter-spacing: normal;
  outline: none;
  border: none;
  padding: 14px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.base-textarea__textarea:focus {
  -webkit-box-shadow: 0px 0px 0px 3px var(--COLOR-PRIMARY);
  -moz-box-shadow: 0px 0px 0px 3px var(--COLOR-PRIMARY);
  box-shadow: 0px 0px 0px 3px var(--COLOR-PRIMARY);
}
@media screen and (max-width: 900px) {
  .base-textarea__textarea {
    line-height: 100%;
  }
}
</style>
