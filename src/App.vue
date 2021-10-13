<template>
  <div class="wrapper">
    <straight-car-left-col>
      <div class="left-col">
        <sc-header />
        <sc-route v-model:routeFrom="routeFrom" v-model:routeTo="routeTo" />
        <sc-transport />
        <sc-cargo />
        <sc-time />
        <sc-comment />
      </div>
    </straight-car-left-col>
    <straight-car-right-col />
  </div>
</template>

<script>
import StraightCarLeftCol from '@/components/straight-car-left-col.vue'
import StraightCarRightCol from '@/components/straight-car-right-col.vue'
import ScHeader from '@/components/root-components/sc-header.vue'
import ScRoute from '@/components/root-components/sc-route.vue'
import ScTransport from '@/components/root-components/sc-transport.vue'
import ScCargo from '@/components/root-components/sc-cargo.vue'
import ScTime from '@/components/root-components/sc-time.vue'
import ScComment from '@/components/root-components/sc-comment.vue'

export default {
  name: 'App',
  components: {
    StraightCarLeftCol,
    StraightCarRightCol,
    ScHeader,
    ScRoute,
    ScTransport,
    ScCargo,
    ScTime,
    ScComment,
  },
  data() {
    return {
      routeFrom: '',
      routeTo: '',
    }
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
