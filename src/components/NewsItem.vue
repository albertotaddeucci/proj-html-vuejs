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
        <div class="tag"><i class="fa-solid fa-tag"></i>{{ news.tag }}</div>
    </div>
    <div class="author">
        <span class="small"><i class="fa-regular fa-clock"></i> {{news.date}}</span>
        <span class="small"><i class="fa-regular fa-user"></i> {{news.author}}</span>
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
        i{
            margin-right: 5px;
        }
    }
    img{
        width: 100%;
        object-fit: cover;
        display: block;

    }

    .author{
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        i{
            color: $accentColor;
            font-size: 13px;
            margin-right: 2px;
        }
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
        font-family: "Libre Baskerville", serif;


    }

    p{
        padding-top: 8px;
        padding-bottom: 20px;
    }

    button{
        span{
            color: $accentColor;
        }
    }
}



</style>