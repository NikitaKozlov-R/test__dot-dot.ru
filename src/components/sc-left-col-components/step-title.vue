<template>
  <div class="step-title">
    <p class="step-title__number">{{ number }}</p>
    <h2 class="step-title__text">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    number: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
.step-title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.step-title__number {
  width: 24px;
  height: 24px;
  background-color: var(--COLOR-PRIMARY);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: normal;
}
.step-title__text {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-top: 4px;
  margin-left: 8px;
}
@media screen and (max-width: 900px) {
  .step-title__text {
    font-size: 20px;
  }
}
</style>
