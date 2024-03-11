<script>
import {store} from '../store.js'

export default {
    name: "NewsItem",   
    
    props: {
        news: Object
    },

    data(){
      return{
        store, 
                                   

      }
    }
}

</script>



<template>

<div class="news">
    <img :src="news.image" alt="">
    <div>
        <span> {{news.date}}</span>
        <span>{{news.author}}</span>
    </div>
    <div class="title">
        {{ news.title }}
    </div>
    <p>{{ news.text }}</p>
    <button>read more</button>

</div>

</template>

<style lang="scss">

.news{
    img{
        width: 100%;
    }
}



</style>