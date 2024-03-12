<script>
import {store} from '../store.js'
export default {
    name: "AppContactUs",    

    data(){
      return{
        store, 
        following: false,
        mouseX: 0,
        mouseY: 0,                              

      }
    },
    // methods:{
    //     startFollowing() {
    //         this.following = true;
    //         console.log("follow")
    //     },
    //     updatePosition() {
    //     if (this.following) {
    //         this.mouseX = clientX;
    //         this.mouseY = clientY;
    //     }
    //     }
    // }
}

</script>



<template>

    <section id="contact-us">

        <div class="container-sm">
            <div class="row">
                <div class="col-img">
                    <img src="/img/h1-contact-rev-01.png" alt="">
                    <div class="red-dots" v-for="event in store.events">
                        <div 
                        class="red"
                        :class="event.eventLocation.includes('Melbourne') ?'mb': 
                                event.eventLocation.includes('London') ? 'ln':
                                event.eventLocation.includes('New York') ? 'ny': ''"
                        >

                            <img src="/img/h1-contact-rev-02.png" alt=""  >

                            
                            <!-- <div class="info-box" @mousemove="updatePosition" @mouseenter="startFollowing">
                                ciao
                            </div> -->
                            
                        </div>
                        


                    </div>

                </div>
                <div class="contact-info">
                    <h2>Contact us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <hr>
                    <div>
                        <input type="text" placeholder="Your name">
                        <input type="text" placeholder="Your Email">

                    </div>
                    <input type="text" placeholder="Write a message ...">

                    <button class="cta-secondary">Send</button>
                    
                    
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
@use '../styles/variables' as *;



#contact-us{
    background-color:$primaryBg ;
    padding-block: 130px;

    .row{
        display: flex;
        gap: 60px;
        
        .col-img{
            width: 50%;
            position: relative;
            img{
                width: 100%;
            }

            .red-dots{
                img{
                    width: 25px ;
                    cursor: pointer;
                }
                .red{
                    position: absolute;

                    &.ny{
                    top: 33%;
                    left: 23%;
                    }

                    &.ln{
                        top: 20%;
                        left: 51%;
                    }

                    &.mb{
                        top: 68%;
                        left: 83%;
                    }
                    
                    .info-box{
                        position: absolute;
                        top: 0;
                    }
                }
                

            }
        }

        .contact-info{
            width: 50%;
            display: flex;
            flex-direction: column;

            hr{
                margin-top: 25px;
                margin-bottom: 20px;
            }

            div:first-of-type{
                display: flex;
                gap: 30px;

                input{
                    flex-grow: 1;
                }

            }

            input{
                margin-top: 20px;
                padding: 10px;

                border: 0;
                border-bottom: 1px solid gray ;
                
                background-color: transparent;
                
            }

            .cta-secondary{
             align-self: flex-start;
             margin-top: 40px;

            }
        }
    }

    .row-clients{
        display: flex;
        justify-content: space-between;

        margin-top: 100px ;
        
    }
}

</style>