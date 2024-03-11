<script>
import {store} from '../store.js'
export default {
    name: "AppCeo",    

    data(){
      return{
        store,

        images:[
            "/img/h1-img-01.jpg",
            "/img/h1-img-02.jpg",
            "/img/h1-img-03.jpg",

        ],

        slideIndex: 0

      }
    },
    methods:{
        slideRight(){
            this.slideIndex++
            if(this.slideIndex > this.images.length - 1){
                this.slideIndex=0
            }
        },
        slideLeft(){
            this.slideIndex--
            if(this.slideIndex < 0){
                this.slideIndex=this.images.length - 1
            }
        }
    }
}

</script>



<template>

    <section class="section-ceo">

        <div class="container">

            <div class="container-sm">
                <div id="ceo">   
                    <div class="img-ceo" v-for="currentImage,index in images">
                        <img v-show="index==slideIndex" :src="currentImage" alt="">
                        
                    </div>
                    
                    <div class="info-ceo">
                        <h3>Jason Bickford</h3>
                        <div>Founder and Executive Director</div>
                        <hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam, perferendis voluptates asperiores eligendi nisi suscipi. </p>
                        <div class="social-icons">
                            <span><i class="fa-brands fa-linkedin-in"></i></span>
                            <span><i class="fa-brands fa-facebook-f"></i></span>
                            <span><i class="fa-brands fa-twitter"></i></span>

                        </div>
                    </div>

                    <div class="btns">

                        <span @click="this.slideLeft">
                            <i class="fa-solid fa-arrow-left-long"></i>
                        </span>
                        <span @click="this.slideRight">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </span>

                    </div>

                </div>
            </div>

        </div>



    </section>



</template>

<style lang="scss">
@use '../styles/variables' as *;


.section-ceo{
    background-color: #fafafa;
    padding-bottom: 140px;      
    
    .container{
        padding-top: 90px;

        background-image: url(/public/svg/svg-4.svg);
        background-repeat: no-repeat;
        background-position: 100%;
        background-position-y: 0%;

    }

}

#ceo{
    display: flex;
    position: relative;
    
    .img-ceo{
        
        img{
            width: 700px;
            object-fit: cover;
            display: block;
        }
    }


    .btns{
        position: absolute;
        bottom: 0;
        left: 0;

        display: flex;
        gap: 20px;

        padding: 25px ;

        background-color: $accentColor;
        color: white;

        span{
            cursor: pointer;
        }
    }
}


.info-ceo{
    width: 55%;
    
    position: absolute;
    top: 0;
    right: 0px;

    padding: 90px 50px;
    
    margin-block: 60px;

    background-color: white ;

    hr{
        margin-block: 20px  ;
    }

    .social-icons{
        display: flex;
        gap: 10px;

        margin-top: 20px;
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: red;
            height: 25px;
            aspect-ratio: 1;

            border-radius: 50%;
            color: white;
            
            &:hover{
                background-color: black;
                cursor: pointer;
                
            }
        }

    }
}

</style>