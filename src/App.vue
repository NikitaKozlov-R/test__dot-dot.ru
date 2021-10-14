<template>
  <div class="wrapper">
    <sc-group-form>
      <sc-header />
      <sc-route v-model:routeFrom="formData.routeFrom" v-model:routeTo="formData.routeTo" />
      <sc-transport
        v-model:carryingСapacity="formData.carryingСapacity"
        v-model:loadingMethod="formData.loadingMethod"
      />
      <sc-cargo
        v-model:typeOfCargo="formData.typeOfCargo"
        v-model:hazardClass="formData.hazardClass"
        v-model:advertisedPrice="formData.advertisedPrice"
        v-model:tempRegime="formData.tempRegime"
        v-model:tempRegimeFrom="formData.tempRegimeFrom"
        v-model:tempRegimeTo="formData.tempRegimeTo"
      />
      <sc-time />
      <sc-comment v-model:comment="formData.comment" />
    </sc-group-form>
    <sc-form-hint>
      <base-hint text="Для расчета стоимости необходимо ввести параметры груза, пункты отправки и прибытия." />
    </sc-form-hint>
  </div>
</template>

<script>
import ScGroupForm from '@/components/sc-group-form.vue'
import ScFormHint from '@/components/sc-form-hint.vue'
import ScHeader from '@/components/root-components/sc-header.vue'
import ScRoute from '@/components/root-components/sc-route.vue'
import ScTransport from '@/components/root-components/sc-transport.vue'
import ScCargo from '@/components/root-components/sc-cargo.vue'
import ScTime from '@/components/root-components/sc-time.vue'
import ScComment from '@/components/root-components/sc-comment.vue'
import BaseHint from '@/components/base-components/base-hint.vue'

export default {
  name: 'App',
  components: {
    ScGroupForm,
    ScFormHint,
    ScHeader,
    ScRoute,
    ScTransport,
    ScCargo,
    ScTime,
    ScComment,
    BaseHint,
  },
  data() {
    return {
      formData: {
        routeFrom: '',
        routeTo: '',
        carryingСapacity: '',
        loadingMethod: '',
        typeOfCargo: '',
        hazardClass: '',
        advertisedPrice: '',
        tempRegime: false,
        tempRegimeFrom: '',
        tempRegimeTo: '',
        comment: '',
      },
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
