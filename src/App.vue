<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppContactUs from './components/AppContactUs.vue'
import AppFooter from './components/AppFooter.vue'

import {store} from './store.js'
import {footerData} from './data/footerData.js'




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
            footerData                              


            
        }
    },

}

</script>

<template>
  <AppHeader 
    :navLinks="store.navbarLinks">
  </AppHeader>
  <AppMain></AppMain>
  <AppContactUs></AppContactUs>
  <AppFooter 
    :comments="footerData.twComments"
    :impLinks="footerData.importantLinks"
    :contacts="footerData.contactList">
  </AppFooter>


</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
