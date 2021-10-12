<template>
  <div class="left-col">
    <straight-car-header />
    <sc-route />
    <sc-transport />
    <sc-cargo />
    <!-- <sc-time />
    <sc-comment /> -->
  </div>
</template>

<script>
import StraightCarHeader from '@/components/straight-car-header.vue'
import ScRoute from '@/components/root-components/sc-route.vue'
import ScTransport from '@/components/root-components/sc-transport.vue'
import ScCargo from '@/components/root-components/sc-cargo.vue'

export default {
  components: {
    StraightCarHeader,
    ScRoute,
    ScTransport,
    ScCargo,
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
