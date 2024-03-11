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
        <div class="container">

            
            <div class="container-sm">
                <h2>Latest news</h2>
                <p>Lorem ipsum dolor sit amet, consecutor</p>
                <hr>
                
                <div class="news-list">
                    <div class="arrows">
                        <span><i class="fa-solid fa-arrow-left-long"></i></span>
                        <span><i class="fa-solid fa-arrow-right-long"></i></span>
        
                    </div>
                    
                    <NewsItem v-for="currentNews in news"
                    :news="currentNews"></NewsItem>
            
                </div>
            </div>


        </div>



    </section>


</template>

<style lang="scss">
@use '../styles/variables' as *;


.latest{
    padding-block: 130px;
    background-color: $primaryBg;

    .container{
        position: relative;

    }
    
    
    .container-sm{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        
        .arrows{
            position: absolute;
            top: 60%;
            left: 0px;

            padding-inline: 20px;
        }

    

        hr{
             margin-top: 26px; 
             margin-bottom: 70px ;
        }
    

        .news-list{
            display: flex;
            gap: 30px;

            width: 100%;  
            
            
        
        
        }
    }
    
}




</style>