<script>
import {store} from '../store.js'
export default {
    name: "AppStats",  
  

    data(){
      return{
        store,

                               

      }
    }
}

</script>



<template>

<div class="container-sm">

    <div class="row">

        <div class="col-left">
            <h3>Creative Leader</h3>
            <hr>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima unde numquam nesciunt fuga atque? Libero, architecto ipsum! Est numquam assumenda voluptates voluptatum itaque sit sequi. Repudiandae perspiciatis qui incidunt!</p>
            <button>read more</button>
        </div>
        <div class="col-right">
            <div  class="stat">
                <div class="info">
                    <div class="name">
                        Mentorship
                    </div>
                    <div class="num">
                        78%
                    </div>
                </div>
                <div class="bar">
                    <hr>
                </div>
            </div>
            <div  class="stat">
                <div class="info">
                    <div class="name">
                        Education
                    </div>
                    <div class="num">
                        78%
                    </div>
                </div>
                <div class="bar">
                    <hr>
                </div>
            </div>
            
            
        </div>

    </div>
</div>



</template>

<style lang="scss">

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
                font-weight: bold;
                margin-bottom: 10px;
            }
            hr{
                width: 100%;
                margin-bottom: 36px;
            }
        }

    }
}


</style>