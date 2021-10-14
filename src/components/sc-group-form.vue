<template>
  <div class="group-form">
    <slot />
  </div>
</template>

<style>
.group-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 112px;
}
@media screen and (max-width: 900px) {
  .group-form {
    padding-bottom: 40px;
  }
}
</style>
