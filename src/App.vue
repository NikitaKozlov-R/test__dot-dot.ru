<template>
  <div class="wrapper">
    <straight-car-header />
    <straight-car-left-col />
    <straight-car-right-col />
  </div>
</template>

<script>
import StraightCarHeader from '@/components/straight-car-header.vue'
import StraightCarLeftCol from '@/components/straight-car-left-col.vue'
import StraightCarRightCol from '@/components/straight-car-right-col.vue'

export default {
  name: 'App',
  components: {
    StraightCarHeader,
    StraightCarLeftCol,
    StraightCarRightCol,
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  padding: 20px 170px;
  display: flex;
}
</style>
