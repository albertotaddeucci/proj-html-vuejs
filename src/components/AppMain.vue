<script>
import {store} from '../store.js'
import AppSpecialties from './AppSpecialties.vue'
export default {
    name: "AppMain",  
    
    components:{
      AppSpecialties
    },

    data(){
      return{
        store,
                               

      }
    }
}

</script>



<template>

<main>
  <AppSpecialties></AppSpecialties>
  
</main>



</template>

<style lang="scss">

</style>