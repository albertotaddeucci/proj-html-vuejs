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

        id: setInterval(this.frame,100),


        stats: [
            {
                name: "Mentorship",
                percentage: "78"
            },
            {
                name: "Education",
                percentage: "95"
            },
            {
                name: "Learning",
                percentage: "65"
            },
            {
                name: "Motivation",
                percentage: "83"
            },
        ]

                               

      }
    },
    methods:{
        
        frame() {              
            
            
            if (this.width >= this.stop) {
                clearInterval(this.id);
                this.prova = this.prova2
                return

                
            } else {
                this.width++; 
                this.prova2 = this.width + '%';                
                this.prova = this.prova2
            }

        },
        stopClick(num){
            console.log(num)
            this.stop=num
        }
        
    }
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
                <button>read more</button>
            </div>
            <div class="col-right"  >
                <div  class="stat" v-for="stat in stats">
                    <div class="info" >
                        <div class="name" @click="stopClick(stat.percentage)">
                            {{stat.name}}
                        </div>
                        <div class="num">
                            {{ stat.percentage }}
                        </div>
                    </div>

                    <div class="bar"  >
                        <div class="bar-full" :style="{ width: this.prova}"></div>
                    </div>

                    <!-- { width: stat.percentage} -->

                    
                    
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


</style>