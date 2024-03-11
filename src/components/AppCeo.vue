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
            <div id="ceo">
        
                <img src="/img/h1-img-01.jpg" alt="">
                
                <div class="info-ceo">
                    <h3>Jason Bickford</h3>
                    <div>Founder and Executive Director</div>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam, perferendis voluptates asperiores eligendi nisi suscipit, saepe recusandae optio iusto nihil minima eveniet aliquid sint aut dicta deserunt corporis. Sunt.</p>
                    <div>
                        li, f, tw
                    </div>
                </div>
            </div>
        </div>


    </section>



</template>

<style lang="scss">

.section-ceo{
    background-color: #fafafa;
    padding-bottom: 65px;

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

    padding: 50px 30px;

    position: absolute;
    top: 0;
    right: 0px;

    margin-block: 30px;
    background-color: grey;
}

</style>