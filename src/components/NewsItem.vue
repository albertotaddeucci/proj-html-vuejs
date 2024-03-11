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
    <div class="image-news">
        <img :src="news.image" alt="">
        <div class="tag">{{ news.tag }}</div>
    </div>
    <div>
        <span class="small"> {{news.date}}</span>
        <span class="small"> {{news.author}}</span>
    </div>
    <div class="title">
        {{ news.title }}
    </div>
    <p>{{ news.text }}</p>
    <button>read more <span><i class="fa-solid fa-arrow-right-long"></i></span></button>

</div>

</template>

<style lang="scss">
@use '../styles/variables' as *;


.news{

    .image-news{
        position: relative;
        margin-bottom: 35px;
    }
    img{
        width: 100%;
        object-fit: cover;
        display: block;

    }

    .tag{
        position: absolute;
        top: 100%;
        right: 5%;

        transform: translateY(-70%);
        padding: 10px;

        color: white;
        background-color: $accentColor;
    }

    .small{
              
        color: $colorSecondary;

    }

    .title{
        font-size: 20px;
        font-weight: bold;

    }

    p{
        padding-top: 8px;
        padding-bottom: 20px;
    }
}



</style>