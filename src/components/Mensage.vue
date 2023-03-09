<template>
  <div class="msnContainer">
    <p > {{ msg }}</p>
 

  </div>

  
</template>

<script>
export default {
  name:"Mensage",
  props:{
    msg : String,
    escolhido:String
  } ,
  data(){
    return{
      myClass:this.escolhido


    }
  },
  

}
</script>

<style lang="scss" scoped>
.msnContainer{
  display: flex;
  height: 100px;
  background-color: #277533;
  align-items: center;
  padding: 0 1rem;
  border-radius: 0.2rem;
  transition: 0.5s;
  h1{
    color: #fff;
    line-height: 50%;
  }

}
.exluido{
  background-color: red;
}


</style>