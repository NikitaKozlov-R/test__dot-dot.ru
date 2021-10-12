<template>
  <div class="left-col">
    <sc-header />
    <sc-route />
    <sc-transport />
    <sc-cargo />
    <sc-time />
    <sc-comment />
  </div>
</template>

<script>
import ScHeader from '@/components/root-components/sc-header.vue'
import ScRoute from '@/components/root-components/sc-route.vue'
import ScTransport from '@/components/root-components/sc-transport.vue'
import ScCargo from '@/components/root-components/sc-cargo.vue'
import ScTime from '@/components/root-components/sc-time.vue'
import ScComment from '@/components/root-components/sc-comment.vue'

export default {
  components: {
    ScHeader,
    ScRoute,
    ScTransport,
    ScCargo,
    ScTime,
    ScComment,
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
