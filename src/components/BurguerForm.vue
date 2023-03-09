<template>
  <div class="hambuguer_container">
    <Mensage :msg="msg" v-show="msg"></Mensage>

    <h2>Monte seu Hamburguer</h2>
    <div class="input-container">
    
      <label for="name">Nome do Cliente </label>
      <input type="text" placeholder="Nome" v-model="nameCliente">
    
    </div>
    <div>{{nomePedido}}</div>
    <div class="input-container">
     
    
      <label for="pao">Escolha seu Pão: </label>
      <select name="pao" id="pao" v-model="pao">
        <option  v-for="pao in paes" :key="pao.id" :value="pao.tipo" class="options" >{{pao.tipo}}</option>
      </select>
    </div>

    <div class="input-container">
    
      <label for="carne">Escolha sua carne: </label>
      <select name="carne" id="carne" v-model="carne">
        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo" class="options">{{carne.tipo}}</option>
      </select>
    </div>
    <div class="opcionais-container">
    
      <label for="opcionais">Selecione os opcionais </label>
      <div class="check-box" v-for="op in opcionais" :key="op.id" >
        <label for="opcionais">{{ op.tipo }} </label><br>
         <input type="checkbox"  :name="op.tipo" v-model="opcionaisPedido" :value="op.tipo" :id="opcionais" >
      
      
      </div>
    
      
    </div>
    <div >
      <button  class="button-envio" @click="criaPedido">Fazer Pedido</button>
   </div>
  </div>
  
  
</template>

<script>
import Mensage from './Mensage.vue'
export default {
  components:{
    Mensage,
   

  },
  name:'BurguerForm',
  data(){
    return{
      paes:null,
      carnes:null,
      opcionais:null,
      nameCliente:null,
      pao:null,
      paoPedido:null,
      carnePedido:null,
      opcionaisPedido:[],
      msg:null



    }
  },
  methods:{
   async getIngredients(){
     const result= await fetch("http://localhost:3000/ingredientes");
      const dados= await result.json();


      this.paes=dados.paes;
      this.carnes=dados.carnes;
      this.opcionais=dados.opcionais; },

      async criaPedido(e){
        e.preventDefault();
      

      
        const clientePedido={
          nomePedido:this.nameCliente,
          paoPedido:this.pao, 
          carnePedido:this.carne,
          opcionaisPedido:Array.from(this.opcionaisPedido),
          status:"Aberto"
        }
        
         const dataJson=JSON.stringify(clientePedido);
         const req = await fetch('http://localhost:3000/burgers',
         {method:"POST",
          headers:{"Content-Type":"application/json"},
          body: dataJson
         });


         const res=await req.json();
         this.msg=`Pedido Numero ${res.id} realizado com sucesso`
         console.log(res);
         setTimeout(()=>{
          this.msg=null;
         },3000)      

      }

  },
  mounted(){
    this.getIngredients()
  

  }

}
</script>

<style lang="scss" scoped>
.hambuguer_container{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #222;
  color: #fff;
  font-size: 1.5rem;


.input-container{
  display: flex;
  flex-direction: column;
  height: 4rem;
  width: 50%;


  column-gap: 1rem;
}

.opcionais-container{
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 24rem;
  margin-bottom: 2rem;
  gap: 2rem;

}

.button-envio{
  background-color: green;
  color: #fff;
  padding: 1rem 10rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 1rem;

}
.button-envio:hover{
  background-color: transparent;
     box-shadow: 0 0 10px rgba(255, 255, 255, 0.2),

  }





}



</style>