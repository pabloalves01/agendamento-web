<template>
  <div class="bg-white">
    <main class="w-full h-full relative">
      <!-- CONTEUDO BREADCRUMS (TRANSFORMAR EM COMPONENTE DEPOIS)-->
      <div class="px-6 py-10">
        <div class="w-full">
          <div class="flex items-center gap-2 text-sm md:text-xl">
            <Home class="text-gray-400" :size="22" />
            <span class="text-gray-400">Home</span>
            <span class="text-gray-400">/</span>

            <span class="text-gray-400">Funcionarios</span>
            <span class="text-gray-400">/</span>

            <span class="font-bold">Gerenciamento de Funcionarios</span>
          </div>
        </div>
      </div>

      <div class="px-6">
        <div>
          <CardTotais />
        </div>

        <div
          class="border border-gray-300 bg-white rounded-lg flex flex-col md:flex-wrap mt-10"
        >
          <div class="border-b border-gray-300 rounded-t-lg px-6 py-5">
            <span class="font-semibold text-md">Cadastro de Funcionarios</span>
          </div>
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-6 my-4">
            <InputNome
              placeholder="Digite o nome completo"
              label="Nome Completo"
              v-model:nome="nome"
            />
            <InputEmail
              placeholder="Digite o e-mail"
              label="E-mail"
              v-model:email="email"
            />
            <InputNumeroTelefone
              placeholder="Digite o número de telefone"
              label="Telefone"
              v-model:telefone="telefone"
            />
          </div>
          <div
            class="border-t border-gray-300 rounded-b-lg flex items-center px-6 py-4"
          >
            <button
              class="bg-cinza hover:bg-zinc-800 transition-all duration-200 ease-in-out py-2 w-24 text-white text-md rounded-lg"
              @click="salvaFuncionario"
            >
              Cadastrar
            </button>
          </div>
        </div>

        <div class="mt-10">
          <CardFuncionario ref="card-funcionario" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CardTotais from "../Cards/CardTotais.vue";
import InputNome from "../Inputs/InputNome.vue";
import InputNumeroTelefone from "../Inputs/InputNumeroTelefone.vue";
import InputEmail from "../Inputs/InputEmail.vue";
import CardFuncionario from "../Cards/CardFuncionario.vue";
import axios from "axios";
export default {
  name: "ConteudoPainelCliente",
  components: {
    CardTotais,
    InputNome,
    InputNumeroTelefone,
    InputEmail,
    CardFuncionario,
  },
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
    };
  },
  methods: {
    async salvaFuncionario() {
      console.log(
        "Funcionário cadastrado com sucesso!",
        this.nome,
        this.email,
        this.telefone
      );

      try {
        await axios.post("/api/cadastro-funcionarios", {
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
        });

        this.$notify({
          title: "Sucesso",
          text: "Funcionário cadastrado com sucesso!",
          type: "success",
        });
        await this.$refs["card-funcionario"].getEmployees();
      } catch (error) {
        console.error("Erro ao cadastrar funcionário", error);
        this.$notify({
          title: "Erro",
          text: error.message || "Erro ao cadastrar funcionário",
          type: "error",
        });
      }
    },
  },
};
</script>
