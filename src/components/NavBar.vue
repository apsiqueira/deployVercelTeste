<template>

  <nav id="nav">
   <router-link to="/" >
      <img class="logo" :src="logo" :alt="alt" >
    </router-link>
    <div class="menu_rigth">
      <router-link to="/">Home</router-link>
      <router-link to="/pedidos">Pedidos</router-link>

    </div>
 
  </nav>

  
</template>

<script>
export default {
  name:"NavBar",
  props:["logo","alt"],
  data(){
    return{


    }
  }

}
</script >

<style lang="scss" scoped>
#nav{
  
  display: flex;
  background-color:#222222;
  align-items: center;
  justify-content:space-between;
  padding: 0 8rem;
  height: 10vh;

  .logo{

    height: 2rem;
  }



.menu_rigth {
  background-color: transparent;
  a{
   
   padding: 0 1rem;
   margin: 0 1rem;
   font-size: 1.6rem; 
   color: #fafafa;
   line-height: 4rem;  
   transition: 0.5s;


 }
 a:hover{
    box-sizing: border-box;
        color: #4b4848;
        background-color: #fafafa;
        border-radius: 0.2rem;
 
      
      
    


  }

}




}




</style>