<script>
import {store} from '../store.js'
import NewsItem from './NewsItem.vue'
import newsJson from '../data/news.json'


export default {
    name: "AppLatestNews",   
    
    components:{
        NewsItem
    },

    data(){
      return{
        store,  
        news: newsJson,                            

      }
    }
}

</script>



<template>

    <section class="latest">

        <div class="container-sm">
            <h2>Latest news</h2>
            <p>Lorem ipsum dolor sit amet, consecutor</p>
            <hr>
        
            <div class="news-list">
        
                <NewsItem v-for="currentNews in news"
                :news="currentNews"></NewsItem>
        
        
        
            </div>
        </div>


    </section>


</template>

<style lang="scss">

.latest{
    background-color: grey;

    padding-block: 65px;
}

.news-list{
    display: flex;
    gap: 18px;



}



</style>