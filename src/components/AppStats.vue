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
            <div>
                Mentorship
            </div>
            <div>
                Education
            </div>
            <div>
                Learning
            </div>
            <div>
                Motivation
            </div>
            
        </div>

    </div>
</div>



</template>

<style lang="scss">

.row{
    margin-block: 70px;
    display: flex;
}

.col-left{
    width: 50%;
}

</style>