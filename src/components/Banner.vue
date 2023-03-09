<template>
  <div class="hero">
    <h1>Make your Burguer</h1>

  </div>
  
</template>

<script>
export default {
  name:"Banner"

}
</script>

<style lang="scss" scoped>
.hero{
  background-image: url('../../public/img/burger.jpg');
  height: 90vh;
  width: 100%;
  background-position: 0 -255px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;


  h1{
  color: #fff;
  font-size: 6rem;
  padding: 4rem 6rem;
  background-color: rgba(125, 125, 129, 0.3);
  border-radius:1rem ;
  }

}

</style>