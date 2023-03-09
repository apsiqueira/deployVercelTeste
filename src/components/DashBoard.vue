<template>
  <Mensage :msg="msg" :escolhido="msnDelete" v-show="msg"></Mensage>

  {{ pedidosFeitos }}

  <div class="containerPedidos">
    <div class="pedidosHead">
      <div class="id-pedido">Pedido</div>
      <div>Cliente:</div>
      <div>Pão:</div>
      <div>Carne:</div>
      <div>Opcionais:</div>
      <div>Ações</div>
    </div>
  </div>
  <div class="containerPedidosRow" v-for="burg in burgues" :key="burg.id">
    <div class="pedidosDatails">
      <div class="id-pedido">{{ burg.id }}</div>
      <div>{{ burg.nomePedido }}</div>
      <div>{{ burg.paoPedido }}</div>
      <div>{{ burg.carnePedido }}:</div>
      <div>
        <ul>
          <li v-for="opcional in burg.opcionaisPedido" :key="opcional.index">
            {{ opcional }}
          </li>
        </ul>
      </div>
      <div class="acoesPedido">
        <span class="statusAtualPedido" v-if="burg.status == 'Cancelado'">{{
          burg.status
        }}</span>
        <select name="status" id="status" @change="updateStatus($event, burg.id)">
          <option
            v-for="st in status"
            :key="st.id"
            :value="st.state"
            :selected="burg.status == st.state"
          >
            {{ st.state }}
          </option>
        </select>

        <button class="btn-remove" @click="removeBurge(burg.id)">Excluir</button>
      </div>
    </div>
  </div>
</template>

<script>
import { stringifyQuery } from "vue-router";
import Mensage from "./Mensage.vue";
export default {
  name: "DashBoard",
  props: {},
  components:{
    Mensage,
  },
  data() {
    return {
      burgues: null,
      burguer_id: null,
      status: [],
      msg:null,
      msnDelete:"excluido"
    };
  },
  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3000/burgers");
      const res = await req.json();
      //this.pedidosFeitos=Array.from(res);
      this.burgues = res;
    },
    async getStatus() {
      const statusApi = await fetch("http://localhost:3000/status");
      const dadosApi = await statusApi.json();
      this.status = dadosApi;
    },
    async updateStatus(event, id) {
      const estadoAtualizado = event.target.value;

      const dataJson = JSON.stringify({ status: estadoAtualizado });

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();
      this.getPedidos();
      this.msg=`Pedido ${id} atualizado Com sucesso`;
      setTimeout(()=>{
        this.msg=null;
   

      },2000)
      

      //this.getPedidos();
    },
    async removeBurge(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();
      //menssagem de deletado
      this.getPedidos();
      this.msg=`Pedido ${id} excluido com sucesso`;
      setTimeout(()=>{
        this.msg=null;
   

      },2000)
    },
  },
  mounted() {
    this.getPedidos(), this.getStatus();
  },
};
</script>

<style lang="scss" scoped>
.containerPedidosRow {
  margin-bottom: 2rem;
}
.containerPedidos,
.containerPedidosRow {
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(86, 84, 84);
  .pedidosHead {
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgb(22, 21, 21);
  }
  .pedidosHead > div,
  .pedidosDatails > div {
    display: flex;
    width: 19%;
    height: 2rem;
    font-weight: 700;
    height: 30px;
    align-items: center;
    padding: 2rem 0;
  }
  .pedidosDatails {
    display: flex;
    width: 100%;
  }
  .btn-atualizar,
  .btn-remove {
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    color: #fff;
    background-color: rgb(71, 125, 71);
    border-radius: 0.2rem;
  }
  .btn-remove {
    background-color: red;
  }
  #acao {
    margin-left: 0.5rem;
  }
  .statusAtualPedido {
    color: #222;
    background-color: yellow;
    padding: 0.5rem;
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
