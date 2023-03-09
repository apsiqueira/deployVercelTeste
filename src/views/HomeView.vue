<template>
  

  <Hero></Hero>
 
  <BurguerForm></BurguerForm>



</template>

<script>
import BurguerForm from '@/components/BurguerForm.vue';
import Hero from "../components/Banner.vue";


export default {
  name:"HomeView",

  components: {
    Hero,
    BurguerForm,



  }
}
</script>
