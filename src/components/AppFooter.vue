<script>
import {store} from '../store.js'
import {footerData} from '../data/footerData.js'

export default {
    name: "AppFooter",
    
    props:{
      comments: Object,
      impLinks: Object,
      contacts: Object
    },

    data(){
      return{
        store, 
        footerData                              

      }
    }
}

</script>



<template>

<footer>

  <div class="container-sm list-footer">
    
    <div class="footer-right">

      <div class="ft-card">
        <h5>About</h5>
        <hr>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div class="social-icons">
          <span><i class="fa-brands fa-linkedin-in"></i></span>
          <span><i class="fa-brands fa-facebook-f"></i></span>
          <span><i class="fa-brands fa-twitter"></i></span>

        </div>
  
      </div>
  
      <div class="ft-card">
        <h5>Twitter</h5>
        <hr>
        <ul>
          <li v-for="comment in comments">
            <div class="single-comment">
              <span><i class="fa-brands fa-twitter"></i></span>
              <div class="comment"> {{comment.user}}{{ comment.comment }} </div>

            </div>
            
          </li>

  
        </ul>
  
      </div>
  
      <div class="ft-card">
        <h5>Important Links</h5>
        <hr>
        <ul>
          <li v-for="link in impLinks">
            {{ link.labelName}}
          </li>
  
        </ul>
        
  
      </div>
    </div>

   

    <div class="ft-card contact">
      <h5>Contact me</h5>
      <hr>
      <ul>
        <li v-for="contact in contacts">
          <i :class="contact.icon"></i>
          {{ contact.contact}}
        </li>

      </ul>

      <label for="">Subscribe</label>
      <input type="text" placeholder="Your name">
      

    </div>
    

    

  </div>

  <div class="red-bar">
    <span>Copyright Everlead MikadoThemes</span>
  </div>
  
</footer>



</template>

<style lang="scss">
@use '../styles/variables' as *;


footer{
  background-color: black;
  color: $colorSecondary;

  font-size: 14px;

  h5{
    color: white;
  }
 

  hr{
    margin-block:20px;
  }

  li{
    margin-bottom: 16px;

    &:hover{
      color: white;
      cursor: pointer;
    }
    
    i{
      color:$accentColor;
      
    }
  }

  

  .social-icons{
    span{
      color: black;
      background-color: white;
      &:hover{
        color: white;
        background-color: black;

      }
    }
  }

  .list-footer{
    display: flex;
    padding-block: 110px;
    justify-content: space-between;

    .footer-right{
      max-width: 830px;
      display: flex;
      gap: 40px;

      .ft-card{
        width: calc(100%/3);

        .single-comment{
          display: flex;
          gap: 20px;

          span{
            font-size: 15px;
          }
          
        }
       
         
      }
    }

    .contact{
      max-width: 300px;
      position: relative;

      i{
        margin-right: 10px;
      }

      input{
        width: 300px;
        margin-top: 30px;

        background: transparent;
        border: 0;
        border-bottom: 1px solid white;
        padding-block: 5px;
      }

      label{
        position: absolute;
        bottom: 8%;
        right: 0px;

        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        color: white;
      }
    }
    
  }



  ul{
    list-style: none;
  }

  .red-bar{
    background-color: $accentColor;
    padding-block: 12px;

    text-align: center;
    color: white;
  }

}

</style>