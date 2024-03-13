<script>
import {store} from '../store.js'
export default {
    name: "AppStats",  
  

    data(){
      return{
        store,

        max:'',
        width: 0,
        id:'',
        stop: 50,


        scrolledPastTriggerPoint: false,

        id: '',


        stats: [
            {
                name: "Mentorship",
                percentage: "78%",
                num: 78,
            },
            {
                name: "Education",
                percentage: "95%",
                num: 95,
            },
            {
                name: "Learning",
                percentage: "65%",
                num: 65,
            },
            {
                name: "Motivation",
                percentage: "83%",
                num: 83,
            },
        ]

                               

      }
    },
    methods:{

        count(num){

            let label            
            
            if(this.width<num){
                label = this.width
                return label 
            } else {

                return label = num

            }

        },
        
        frame() {              
            this.count()
            
            if (this.width >= 100 ) {
                clearInterval(this.id);
                return

                
            } else {
                this.width++; 
                this.max = this.width + '%';                
            }

            
            

        },

        onScroll() {
            const scrollTop = window.scrollY;
            const triggerPoint = 2000; 
            
            if (scrollTop >= triggerPoint && !this.scrolledPastTriggerPoint) {
                this.scrolledPastTriggerPoint = true;
                this.$emit("scrolled-past-trigger-point");
                this.id=setInterval(this.frame,20)
            }
        },
        
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
}

</script>



<template>
    <div class="container-sm">
    
        <div class="row">
    
            <div class="col-left">
                <h3>Creative Leader<span class="dot">.</span></h3>
                <hr>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima unde numquam nesciunt fuga atque? Libero, architecto ipsum! Est numquam assumenda voluptates voluptatum itaque sit sequi. Repudiandae perspiciatis qui incidunt!</p>
                <button>read more <span><i class="fa-solid fa-arrow-right-long"></i></span></button>
            </div>
            <div class="col-right"  >
                <div  class="stat" v-for="stat in stats">
                    <div class="info" >
                        <div class="name">
                            {{stat.name}}
                        </div>
                        <div class="num">
                            {{ this.count(stat.num) + "%" }}
                        </div>
                    </div>

                    <div class="bar"  >
                        <div class="control-bar" :style="{ width: stat.percentage}">
                            <div class="bar-full" :style="{ width: this.max}"></div>
                        </div>
                    </div>

                    

                    
                    
                </div>
                
                
                
            </div>
    
        </div>

    </div>



</template>

<style lang="scss">
@use '../styles/variables' as *;


.row{
    padding-block: 130px;
    display: flex;
    gap: 80px;
   
    .col-left{
        width: 50%;

        hr{
            margin-bottom: 25px ;
        }

        button{
            margin-top: 30px;
            &:hover{
                span{
                    color: $accentColor;
                }
            }
        }
    }

    .col-right{
        width: 50%;

        .stat{

            .info{
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                
                font-weight: bold;

                .name{
                    font-family: "Libre Baskerville", serif;

                }

                .num{
                    font-family: "Libre Baskerville", serif;

                }
            }
            
            .bar{
                width: 100%;
                height: 1px;
                margin-bottom: 36px;

                background-color: rgb(213, 207, 207);

                .control-bar{
                    position: relative;
                    
                    .bar-full{
                        position: absolute;
                        top: -3px;

                        height:4px;
                        background-color: $accentColor;
                        width: 30%;
                    }
                }

            }
        }

    }
}


</style>