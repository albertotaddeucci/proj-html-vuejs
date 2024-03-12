<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppContactUs from './components/AppContactUs.vue'
import AppFooter from './components/AppFooter.vue'

import {store} from './store.js'



export default {
    components:{      
      AppHeader,
      AppMain,
      AppFooter,
      AppContactUs
    },

    
    data() {
        return {
            store,

            
        }
    },

}

</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppContactUs></AppContactUs>
  <AppFooter></AppFooter>


</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
