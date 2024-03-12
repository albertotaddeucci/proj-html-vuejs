<script>
import {store} from '../store.js'
import eventsJson from '../data/events.json'
import EventItem from './EventItem.vue'
export default {
    name: "AppEvents",  

    components:{EventItem},
    
    

    data(){
      return{
        store,
        events: eventsJson,                               

      }
    },

    
}

</script>



<template>

    <section class="events">


        <div class="container-sm">
        
            <div class="event-list">
                <h3>
                    Upcoming Events
                </h3>
                <ul>
                    <EventItem 
                    v-for="currentEvent in events"
                    :event="currentEvent"
                    ></EventItem>
                </ul>
            </div>
        </div>



    </section>



</template>

<style lang="scss">

.events{
    padding-block: 115px;

    background-image: url(/img/h1-img-09.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.event-list{
    max-width: 520px;

    background-color: white;

    h3{
        padding: 30px 45px;

        font-size: 28px;
        
        background-color: #fafafa;
        border-bottom: 1px solid #e1e1e1;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }



}

</style>