<script>
import {store} from '../store.js'
export default {
    name: "AppHeader",    

    data(){
      return{
        store,

        slidesJumbo:[
          {
            image:"/img/rev-slider-main-home-img-03.jpg",
            title:"Our Team",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet cum accusamus nemo esse debitis doloremque."
          },
          {
            image:"/img/h1-rev-img-01.jpg",
            title:"Leading",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet cum accusamus nemo esse debitis doloremque."
          },
          {
            image:"/img/rev-slider-main-home-img-02.png",
            title:"Coaching",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet cum accusamus nemo esse debitis doloremque."
          },
        ],

        slideIndex: 0
                               

      }
      
    },
    methods:{
        slideRight(){
            this.slideIndex++
            if(this.slideIndex > this.slidesJumbo.length - 1){
                this.slideIndex=0
            }
        },
        slideLeft(){
            this.slideIndex--
            if(this.slideIndex < 0){
                this.slideIndex=this.slidesJumbo.length - 1
            }
        }
    }
}

</script>



<template>

  <div id="header">

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
    
    <div v-for="currentSlide,index in slidesJumbo"  >
      
      <div id="jumbo" 
      v-show="slideIndex==index"
      :style="{ backgroundImage: 'url(' + currentSlide.image + ')' }"
      >
        <div class="jumbo-info">
          
          <h1>{{ currentSlide.title }}</h1>
          <p>{{ currentSlide.text }}</p>
          <div class="buttons">
            <button>read more</button>
            <button>purchase</button>
          </div>
          
        </div>

        <div class="arrows">
          <span @click="this.slideLeft"><i class="fa-solid fa-arrow-left-long"></i></span>
          <span @click="this.slideRight"><i class="fa-solid fa-arrow-right-long"></i></span>
          
        </div>
      
      </div>  
      
  
    </div>

  </div>




</template>

<style lang="scss">


#jumbo{
  height: 880px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  .jumbo-info{
    position: absolute;
    top: 50%;
    left: 20%;
    
    p{
      width: 55ch;
    }
    
    .buttons{
      display: flex;
      gap: 10px;
    }
  }

  .arrows{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1760px;
  }
  
}

#header{

  .container{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    width: 100%;

    
  }


}

nav{   
  display: flex;
  justify-content: space-between;
  align-items: center ;

  padding-block: 20px;

  #logo{
    
    img{
      height: 30px;
    }
  }

  ul{
    display: flex;
    list-style: none;
    gap: 20px;

    text-transform: uppercase;
    font-weight: bold  ;
  }
}

</style>