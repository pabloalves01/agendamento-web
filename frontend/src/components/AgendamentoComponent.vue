<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavBar></NavBar>

    <section class="container mx-auto my-20">
      <div class="mb-10 flex flex-row">
        <img
          src="../assets/images/icons/icon-barbearia.svg"
          class="mr-5"
          alt=""
        />
        <div class="flex flex-col">
          <h1 class="text-4xl font-semibold text-gray-800 mb-4">
            Selecione um Serviço
          </h1>
          <h4>Selecione uma opção e o profissional desejado.</h4>
        </div>
      </div>

      <div class="flex flex-wrap gap-5">
        <CardServico
          v-for="(servico, index) in servicos"
          :key="index"
          :nomeCorte="servico.nomeCorte"
          :duracao="servico.duracao"
          :funcionarios="servico.funcionarios"
        ></CardServico>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavBar from "./NavBar.vue";
import CardServico from "./CardServico.vue";
export default {
  name: "AgendamentoComponent",
  components: {
    NavBar,
    HeaderComponent,
    CardServico,
  },
  data() {
    return {
      servicos: [
        {
          nomeCorte: "Corte Degradê + Barba",
          duracao: "30 min",
          funcionarios: [{ nome: "João" }, { nome: "José" }, { nome: "Maria" }, { nome: "Ana" }, { nome: "Pedro" }],
        },
        {
          nomeCorte: "Corte Degradê + Barba",
          duracao: "30 min",
          funcionarios: [{ nome: "João" }, { nome: "José" }, { nome: "Maria" }, { nome: "Ana" }, { nome: "Pedro" }],
        },
        {
          nomeCorte: "Corte Degradê + Barba",
          duracao: "30 min",
          funcionarios: [{ nome: "João" }, { nome: "José" }, { nome: "Maria" }, { nome: "Ana" }, { nome: "Pedro" }],
        },
        {
          nomeCorte: "Corte Degradê + Barba",
          duracao: "30 min",
          funcionarios: [{ nome: "João" }, { nome: "José" }, { nome: "Maria" }, { nome: "Ana" }, { nome: "Pedro" }],
        },
      ],
    };
  },
};
</script>
