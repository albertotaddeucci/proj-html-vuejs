<script>
import {store} from '../store.js'
export default {
    name: "AppCeo",    

    data(){
      return{
        store,                               

      }
    }
}

</script>



<template>

    <section class="section-ceo">

        <div class="container">


            <div class="container-sm">
                <div id="ceo">
    
            
                    <img src="/img/h1-img-01.jpg" alt="">
                    
                    <div class="info-ceo">
                        <h3 >Jason Bickford</h3 >
                        <div>Founder and Executive Director</div>
                        <hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam, perferendis voluptates asperiores eligendi nisi suscipi. </p>
                        <div>
                            li, f, tw
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- <img src="/public/svg/svg-4.svg" alt=""> -->



    </section>



</template>

<style lang="scss">





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


    img{
        width: 55%;
    }
}


.info-ceo{
    width: 55%;

    padding: 110px 50px;

    position: absolute;
    top: 0;
    right: 0px;

    margin-block: 55px;
    background-color: white ;

    hr{
        margin-block: 20px  ;
    }
}

</style>