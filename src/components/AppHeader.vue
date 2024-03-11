<script>
import {store} from '../store.js'
export default {
    name: "AppHeader",    

    data(){
      return{
        store,
                               

      }
    }
}

</script>



<template>

  
<div id="jumbo">
    
    <div class="container">
    
      <nav>
        <div id="logo">
          <img src="/public/img/logo-img-01.png" alt="">
        </div>
        <ul>
          <li v-for="link in store.navbarLinks">
          {{ link }}
          </li>
        </ul>
      </nav>
    
    </div>


</div>



</template>

<style lang="scss">


#jumbo{
  height: 470px;
  background-image: url(/public/img/rev-slider-main-home-img-03.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

nav{
  display: flex;
  justify-content: space-between;

  padding-block: 20px;

  #logo{
    
    img{
      height: 14px;
    }
  }

  ul{
    display: flex;
    list-style: none;
    gap: 20px;

    text-transform: uppercase;
  }
}

</style>