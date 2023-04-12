<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Bienvenido a Front - End" mensaje2="Sala 201"/>

    <OtroVue mssg="HomeView"/>

    <h3 :style="colorContador"> {{titulo}} {{ $store.state.contador }}</h3>
    <button @click="inc" style="margin: 2px">Aumenta</button>
    <button @click="dec(2)" style="margin: 2px">Disminuye</button>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OtroVue from '@/components/OtroVue.vue'; 
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'HomeView',
  data() {
    return {
      titulo : "Contador Vuex :"
    }
  },
  computed : {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 50 ? {'color':'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['inc']),
    ...mapMutations(['dec'])
  },
  components: {
    HelloWorld,
    OtroVue
  }
}
</script>
