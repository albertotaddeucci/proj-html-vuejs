<script>
import {store} from '../store.js'
export default {
    name: "AppContactUs",    

    data(){
      return{
        store,                               

      }
    }
}

</script>



<template>

    <section id="contact-us">

        <div class="container-sm">
            <div class="row">
                <div class="col-img">
                    <img src="/img/h1-contact-rev-01.png" alt="">

                </div>
                <div class="contact-info">
                    <h2>Contact us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <hr>
                    <input type="text" placeholder="name">
                    <input type="text" placeholder="emil">
                    <input type="text" placeholder="message">

                    <button>Send</button>

                
                </div>
            </div>
            <div class="row-clients">
                <div class="client" v-for="client in store.clients">
                    <img :src="client.image" alt="">
                </div>

            </div>

        </div>
    </section>



</template>

<style lang="scss">


#contact-us{
    .row{
        display: flex;
        
        .col-img{
            width: 50%;
            img{
                width: 100%;
            }
        }

        .contact-info{
            width: 50%;
            display: flex;
            flex-direction: column;
        }
    }

    .row-clients{
        display: flex;
        justify-content: space-between;
        img{
            width: 50px;
        }
    }
}

</style>