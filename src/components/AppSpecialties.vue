<script>
import {store} from '../store.js'
import specialtiesJson from '../data/specialties.json'

export default {
    name: "AppSpecialties",    

    data(){
      return{
        store, 
                                   

      }
    }
}

</script>



<template>

    <section>

        <div class="container specialties">
            
            <h2>Our specialties</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr>
            <div id="list-specialties">
    
        
                <div v-for="specialty in store.specialties" class="specialty">        
                    <img :src="specialty.image" alt="">
                    <div class="title">{{ specialty.title }}</div>
                    <p>{{specialty.info}}</p>
                </div>
        
            </div>
    
    
        </div>



    </section>



</template>

<style lang="scss">

section:first-of-type{
    background-color: #fafafa;
}

.specialties{
    padding-block: 60px;
    text-align: center;

    transform: translateY(-50px);

    background-color: white;
}

#list-specialties{
    display: flex;
    justify-content: space-around;
   
    .specialty{
        .title{
            font-weight: bold;

        }
    }

    img{
        height: 80px;
    }

}

</style>