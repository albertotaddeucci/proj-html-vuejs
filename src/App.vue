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
  <div id="fixed">
    <div class="box explore">
      <img src="/svg/svg-8.svg" alt="">
    </div>
    <div class="box shop">
      <img src="/svg/svg-7.svg" alt="">
      
    </div>
  </div>
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

#fixed{
  position: fixed;
  top: 20%;
  right: 0;

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 10px;

  

  .box{
    width: 40px;
    height: 40px;
    padding: 5px;
  }

  .explore{
    background-color: #ee2852 ;
    img{
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(326deg) brightness(150%) contrast(101%);
    }

    &:hover{
      cursor: pointer;
    }
  }

  .shop{
    background-color: white;

    &:hover{
      cursor: pointer;
    }
  }



}

</style>
