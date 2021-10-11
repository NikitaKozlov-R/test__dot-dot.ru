<template>
  <div class="left-col">
    <straight-car-header />
    <sc-route />
    <sc-transport />
    <!-- <sc-cargo />
    <sc-time /> -->
  </div>
</template>

<script>
import StraightCarHeader from '@/components/straight-car-header.vue'
import ScRoute from '@/components/sc-left-col-components/sc-route.vue'
import ScTransport from '@/components/sc-left-col-components/sc-transport.vue'

export default {
  components: {
    StraightCarHeader,
    ScRoute,
    ScTransport,
  },
}
</script>

<style>
.left-col {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
