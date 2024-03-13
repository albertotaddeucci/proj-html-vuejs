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
            
            <h2>Our specialties<span class="dot">.</span></h2>
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
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-block: 130px;

    transform: translateY(-50px);

    background-color: white;

    p{
        font-size: 20px;
    }

    hr{
        margin-top: 30px;
        margin-bottom: 70px;
    }
}

#list-specialties{
    display: flex;
    justify-content: space-around;
    gap: 110px;

    align-items: center;

   
    .specialty{
        text-align: center;
        .title{
            font-weight: bold;
        font-family: "Libre Baskerville", serif;

        }

        .title{
            padding-block: 25px;
            font-size: 20px;
        }

        p{
            font-size: 16px;
            width: 230px;
        }
    }

    

}

</style>