<template>
  <div class="temp-regime">
    <div class="temp-regime__item">
      <text-field title="От, °C" placeholder="-20" />
    </div>
    <div class="temp-regime__item">
      <text-field title="До, °C" placeholder="+23" />
    </div>
  </div>
</template>

<script>
import TextField from '@/components/base-components/text-field.vue'

export default {
  components: {
    TextField,
  },
}
</script>

<style>
.temp-regime {
  width: 50%;
  display: flex;
}
.temp-regime__item {
  width: calc(100% - 6px);
  margin-right: 12px;
}
</style>
