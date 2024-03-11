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
    }
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
    padding-block: 100px;

    background-image: url(/img/h1-img-09.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.event-list{
    width: 275px;

    background-color: white;

}

</style>