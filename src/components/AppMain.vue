<script>
import {store} from '../store.js'
import AppSpecialties from './AppSpecialties.vue'
import AppEvents from './AppEvents.vue'
import AppStats from './AppStats.vue'
import AppLatestNews from './AppLatestNews.vue'
import AppCeo from './AppCeo.vue'



export default {
    name: "AppMain",  
    
    components:{
      AppSpecialties,
      AppEvents,
      AppStats,
      AppLatestNews,
      AppCeo
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
  <AppCeo></AppCeo>
  <AppEvents></AppEvents>
  <AppStats></AppStats>
  <AppLatestNews></AppLatestNews>
  
</main>



</template>

<style lang="scss">

</style>