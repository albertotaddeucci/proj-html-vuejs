<script>
import {store} from '../store.js'

export default {
    name: "AppTestimonials",  
    
    // props: {
    //     event: Object,
    // },

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
        }
    }
}

</script>



<template>
  <section id="testimonials">

    <div class="container">

        <span class="title">Testimonials.</span>
        
        <div>
            
            <div class="testimonial-list" v-for="testimonial,index in testimonials" >
                <div class="testimonial" v-show="slideIndex==index" >
                    <img :src="testimonial.image" alt="">
                    <div class="name">{{ testimonial.name }}</div>
                    <p>{{ testimonial.quote }}</p>
    
                    <div class="arrows">
                        <span @click="this.slideLeft"><i class="fa-solid fa-arrow-left-long"></i></span>
                        <span @click="this.slideRight"><i class="fa-solid fa-arrow-right-long"></i></span>
                        
                    </div>
                    
                    <div class="slider-count">
                        <div>0{{index+1}}</div>
                        <div><hr></div>
                        <div>0{{testimonials.length}}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>


  </section>


</template>

<style lang="scss">
@use '../styles/variables' as *;

#testimonials{
    position: relative;

    background-color: $secondaryBg;
    .title{
        display: block;
        position: absolute;
        left: 50%;
        top: -3%;
        transform: translateX(-50%);

        font-size: 180px ;
        font-weight: bold;
        font-family: "Libre Baskerville", serif;

    }

    .container{
        position: relative;
        text-align: center;

        .testimonial-list{
            position: relative;

            .testimonial{

                padding-block: 130px;

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
    
                .arrows{
                    position: absolute;
                    top: 50%;
                    left: 0;
    
                    padding-inline: 20px;
    
                    color: white;
                }

                .slider-count{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    padding-top: 20px;

                    color: white;

                    
                }


            }
        }
    }

}



</style>