<script>
import {store} from '../store.js'
export default {
    name: "AppStats",  
  

    data(){
      return{
        store,

        prova:"0%",
        width: 0,
        id:'',
        prova2:'',
        stop: 50,

        scrolledPastTriggerPoint: false,

        id: '',


        stats: [
            {
                name: "Mentorship",
                percentage: "78%"
            },
            {
                name: "Education",
                percentage: "95%"
            },
            {
                name: "Learning",
                percentage: "65%"
            },
            {
                name: "Motivation",
                percentage: "83%"
            },
        ]

                               

      }
    },
    methods:{
        
        frame() {              
            
            if (this.width >= 100 ) {
                clearInterval(this.id);
                this.prova = this.prova2
                return

                
            } else {
                this.width++; 
                this.prova2 = this.width + '%';                
                this.prova = this.prova2
                this.label = this.width + '%'
            }
            
            

        },

        onScroll() {
            const scrollTop = window.scrollY;
            const triggerPoint = 2000; 
            
            if (scrollTop >= triggerPoint && !this.scrolledPastTriggerPoint) {
                this.scrolledPastTriggerPoint = true;
                this.$emit("scrolled-past-trigger-point");
                this.id=setInterval(this.frame,40)
            }
        },
        
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
}

</script>



<template>
<section id="stats">

    <div class="container-sm">
    
        <div class="row">
    
            <div class="col-left">
                <h3>Creative Leader</h3>
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
                            {{ stat.percentage }}
                        </div>
                    </div>

                    <div class="bar"  >
                        <div class="control-bar" :style="{ width: stat.percentage}">
                            <div class="bar-full" :style="{ width: this.prova}"></div>
                        </div>
                    </div>

                    

                    
                    
                </div>
                
                
                
            </div>
    
        </div>
    </div>

</section>



</template>

<style lang="scss">
@use '../styles/variables' as *;


#stats{

    .row{
        margin-block: 130px;
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
                }
                
                .bar{
                    width: 100%;
                    height: 2px;
                    margin-bottom: 36px;

                    background-color: rgb(213, 207, 207);

                    .control-bar{
                        
                        .bar-full{
                            height:4px;
                            background-color: $accentColor;
                            width: 30%;
                        }
                    }

                }
            }
    
        }
    }

}


</style>