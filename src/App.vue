<template>
 <NavBar :logo="logo_src" :alt="app_name"></NavBar>
 <router-view/>
 <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default{
  components:{
    NavBar,
    Footer

  },
  data(){
    return{
      logo_src:"img/logo.png",
      app_name:"Make Your Burguer"

    }
  }

}

</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: roboto;
  html{
    font-size: 62.5%;

  
  }
  .main_container{
    padding: 0 8rem;
    display: flex;
    justify-content: start;
    padding-top: 2rem;
    flex-direction: column;
    align-items: center;

  }

}



</style>
