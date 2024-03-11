<script>
import {store} from '../store.js'

export default {
    name: "EventItem",  
    
    props: {
        event: Object,
    },

    data(){
      return{
        store, 
                                   

      }
    }
}

</script>



<template>
    <div class="event">
        <div class="event-left">
            <div class="square">

                <div class="day">07</div>
                <div class="month">Jan 2022</div>

            </div>
        </div>
        <div class="event-right">
            <div class="event-title">
                {{ event.eventTitle }}
            </div>
            <div class="time-event small">
                {{ event.eventDuration }}, {{ event.eventDate }}
            </div>
            <div class="site-event small">
                {{ event.eventSite }}
            </div>
            <button>read more <span><i class="fa-solid fa-arrow-right-long"></i></span></button>
        </div>
    </div>


</template>

<style lang="scss">
@use '../styles/variables' as *;


.event{
    display: flex;
    gap: 25px;

    padding: 40px;
    
    border-bottom: 1px solid $colorSecondary;

}

.event-left{
    width: 25%;

    .square{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        padding: 12px;

        color: white;
        background-color: red;

        .day{
            font-weight: bold;


        }
    }
}

.event-right{
    width: 75%;

    .event-title{
        margin-bottom: 20px;
        
        font-size: 20px;
        font-weight: bold;
        font-family: "Libre Baskerville", serif;

    }
    
    .small{
        color: $colorSecondary;
        margin-bottom: 14px;

    }

    span{
        text-transform: uppercase;
        font-weight: bold;
    }
}



</style>