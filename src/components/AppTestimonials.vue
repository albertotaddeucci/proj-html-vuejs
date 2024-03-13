<script>
import {store} from '../store.js'

export default {
    name: "AppTestimonials",  
    
    data(){
      return{
        store, 

        testimonials:[
            {
                image: "/img/h3-img-04.png",
                name: "Cynthia Clark",
                quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet cum accusamus nemo esse debitis doloremque."'
            },
            {
                image: "/img/h3-img-08.png",
                name: "Jane Doe",
                quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet cum accusamus nemo esse debitis doloremque."'
            },
            {
                image: "/img/h3-img-07.png",
                name: "Lian Ni",
                quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet cum accusamus nemo esse debitis doloremque."'
            }
            
        ],

        slideIndex: 0,
        
        playerIndex:0,
        playerOn: false

      }
    },

    methods:{
        slideRight(){
            this.slideIndex++
            if(this.slideIndex > this.testimonials.length - 1){
                this.slideIndex=0
            }
        },
        slideLeft(){
            this.slideIndex--
            if(this.slideIndex < 0){
                this.slideIndex=this.testimonials.length - 1
            }
        },
        showPlayer(){
            this.playerOn=true
        }
    }
}

</script>



<template>

<section id="testimonials">

    <span class="title">Testimonials.</span>
    <div class="container">
        
          
        <div>
              
            <div class="testimonial-list" v-for="testimonial,index in testimonials" >
                <div class="testimonial" 
                  :class="slideIndex==index ? 'showing' : ''"
                >
                    <img :src="testimonial.image" alt="">
                    <div class="name">{{ testimonial.name }}</div>
                    <p>{{ testimonial.quote }}</p>
      
                      
                    <div class="slider-count">
                          <div>0{{index+1}}</div>
                          <div class="slider-rectangle">
                            <div class="rectangle" :class="index==1?'m':index==2?'e':''"></div>
                          </div>
                          <div>0{{testimonials.length}}</div>
                    </div>
                </div>
            </div>
        </div>
          
        <div class="arrows">
            <span @click="this.slideLeft"><i class="fa-solid fa-arrow-left-long"></i></span>
            <span @click="this.slideRight"><i class="fa-solid fa-arrow-right-long"></i></span>
              
        </div>
    </div>
      
      
</section>
<section id="player">
    
    
    <div id="player-overlay" v-show="playerOn==true">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/1210uCj6Ydg?si=u1VxH9X8pyGkSsPl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>


    <button @click="showPlayer"><i class="fa-solid fa-play"></i></button>
    


</section>



</template>

<style lang="scss">
@use '../styles/variables' as *;

#testimonials{
    position: relative;

    height: 580px;

    background-color: $secondaryBg;
    .title{
        display: block;
        position: absolute;
        top: -3%;
        left: 50%;
        transform: translateX(-50%);


        font-size: 180px ;
        font-weight: bold;
        font-family: "Libre Baskerville", serif;

        user-select: none;

    }
    
    
    .container{
        position: relative;
        text-align: center;
        
        .arrows{
            position: absolute;
            top: 290px;
            left: 0;
    
            padding-inline: 20px;
    
            color: white;
        }

        .testimonial-list{

            .testimonial{
                position: absolute;
                top: 0;
                right: 50%;
                transform: translate(50%);

                padding-block: 130px;

                opacity: 1;
                transition: opacity 0.5s ease;

                img{
                    height: 120px;
                }
                
                .name{
                    margin-block: 30px;
                    
                    color: white;
                    font-weight: bold;
                    font-family: "Libre Baskerville", serif;

                    
                }
                
                p{
                    width: 60ch;
                    margin-inline: auto;
                }
    

                .slider-count{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    padding-top: 20px;

                    color: white;

                    .slider-rectangle{
                        height: 2px;
                        width: 100px;
                        background-color: grey;

                        .rectangle{
                            height: 2px;
                            width: 33px;
                            background-color: white;

                            &.m{
                                
                                margin-left: 33px;
    
                            }
                            &.e{
                                
                                margin-left: 66px;
    
                            }
                        }

                    }

                    
                }

                &:not(.showing){
                    opacity: 0;

                }

            }
        }
    }

}

#player{

    position: relative;

    height: 920px;
    background-image: url("/img/h1-img-04.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    button{
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        font-size: 55px;
        scale: 1;
        transition: scale 0.3s ease;

        &:hover{
            scale: 1.3;
        }
    }
    

    #player-overlay{
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;


        transform: translate(-50%, -50%)

        

    }

   
}



</style>