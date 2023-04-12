<template>
  <div class="about">
    <h1>This is an about page</h1>
    <OtroVue mssg="Valor" />
  </div>
</template>

<script>
import OtroVue from '@/components/OtroVue.vue'

export default {
  name: 'AboutView',
  components: {
    OtroVue
  }
}
</script>