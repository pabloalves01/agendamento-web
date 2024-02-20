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
          <h1 class="text-6xl font-semibold text-cinza mb-4">
            Selecione um Serviço
          </h1>
          <span>Selecione uma opção e o profissional desejado.</span>
        </div>
      </div>
      <div>
        <label class="mb-10">Selecione o dia:</label>
        <VueDatePicker class="mb-4" v-model="date"></VueDatePicker>
      </div>

      <div class="flex flex-wrap">
        <CardServico
          v-for="(servico, index) in servicos"
          :key="index"
          :nomeCorte="servico.nome_servico"
          :duracao="`${servico.tempo_medio} min`"
          :valor="servico.valor"
          :funcionarios="
            funcionarios[0]?.nome_funcionario ||
            'Nenhum funcionário Disponível.'
          "
        ></CardServico>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavBar from "./NavBar.vue";
import CardServico from "./CardServico.vue";
import axios from "axios";
export default {
  name: "AgendamentoComponent",
  components: {
    NavBar,
    HeaderComponent,
    CardServico,
  },
  data() {
    return {
      funcionarios: [],
      servicos: [
        {
          nome_servico: "",
          tempo_medio: "",
          valor: "",
        },
      ],
    };
  },
  async created() {
    await this.getServicos();
    await this.getFuncionarios();
  },
  methods: {
    async getServicos() {
      const response = await axios.get("/api/servicos");
      this.servicos = response.data;
      console.log("servicos", this.servicos);
      await this.getFuncionarios();
    },
    async getFuncionarios() {
      const response = await axios.get("/api/funcionarios");
      this.funcionarios = response.data;
      console.log("funcionarios aqui", this.funcionarios);
    },
  },
};
</script>
