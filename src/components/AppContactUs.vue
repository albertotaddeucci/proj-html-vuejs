<script>
import {store} from '../store.js'
export default {
    name: "AppContactUs",   
    
    labelIndex: '',

    data(){
      return{
        store, 
        infoShow: false                                     

      }
    },
    methods: {
        showLabel(index){
            this.infoShow=true   
            this.labelIndex=index        


        },
        hideLabel(index){
            this.infoShow=false


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
                    <div class="red-dots" v-for="event,index in store.events">
                        <div 
                        class="red"
                        :class="event.eventLocation.includes('Melbourne') ?'mb': 
                                event.eventLocation.includes('London') ? 'ln':
                                event.eventLocation.includes('New York') ? 'ny': ''"
                        >
                            
                            <img src="/img/h1-contact-rev-02.png" alt="" @mouseenter="showLabel(index)" @mouseleave="hideLabel(index)">
                            
                            
                            <div class="info-box" :class="this.infoShow==true && index==this.labelIndex ? 'show':''">
                                <div class="label-event">
                                    {{ event.eventTitle }}
                                </div>
                                <button>read more</button>
                            </div>
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
                    <textarea type="textarea" placeholder="Write a message ..."></textarea>
                    
                    <button class="cta-secondary"><div>send</div><span><i class="fa-solid fa-arrow-right-long"></i></span></button>
                    
                    
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
                    top: 28%;
                    left: 23%;
                    }

                    &.ln{
                        top: 18%;
                        left: 51%;
                    }

                    &.mb{
                        top: 58%;
                        left: 83%;
                    }
                    
                    .info-box{
                        position: absolute;
                        top: 0;
                        transform: translateY(30px);

                        display: none;

                        width: 270px;

                        padding: 24px;

                        background-color: white;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

                        .label-event{
                            font-size: 18px;
                            font-weight: bold;
                            font-family: "Libre Baskerville", serif;

                        }

                        &.show{
                            display: block;
                        }

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

            textarea{

                padding: 30px 10px;
                padding-bottom: 60px;

                border: 0;

                border-bottom: 1px solid gray ;
                background-color: transparent;


            }

            .cta-secondary{
             align-self: start;
             margin-top: 40px;

            }
        }
    }

    .row-clients{
        display: flex;
        justify-content: space-between;

        margin-top: 100px ;

        .client{
            img{
                &:hover{
                    cursor: pointer;
                    filter: invert(39%) sepia(68%) saturate(4370%) hue-rotate(352deg) brightness(100%) contrast(102%);;
                }
            }
        }
        
    }
}


</style>