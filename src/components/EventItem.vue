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

                <div>11</div>
                <div>Jan 2022</div>

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
            <span>read more</span>
        </div>
    </div>


</template>

<style lang="scss">

.event{
    display: flex;
    gap: 12px;

    padding: 25px;
    
    border-bottom: 2px solid gray;
}
.event-left{
    width: 25%;

    .square{
        background-color: red;
    }
}

.event-right{
    width: 75%;

    span{
        text-transform: uppercase;
        font-weight: bold;
    }
}

.small{
    font-size: 8px;
}


</style>