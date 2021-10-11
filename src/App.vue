<template>
  <div class="wrapper">
    <straight-car-left-col />
    <straight-car-right-col />
  </div>
</template>

<script>
import StraightCarLeftCol from '@/components/straight-car-left-col.vue'
import StraightCarRightCol from '@/components/straight-car-right-col.vue'

export default {
  name: 'App',
  components: {
    StraightCarLeftCol,
    StraightCarRightCol,
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  padding: 20px 170px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0px 16px;
  justify-items: start;
}
@media screen and (max-width: 900px) {
  .wrapper {
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
  }
}
</style>
