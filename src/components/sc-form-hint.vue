<template>
  <div class="form-hint">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style>
.form-hint {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 112px;
}
@media screen and (max-width: 900px) {
  .form-hint {
    width: auto;
  }
}
</style>
