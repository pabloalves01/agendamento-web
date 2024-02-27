<template>
  <div class="bg-gray-50">
    <main class="w-full h-full relative">
      <header
        class="flex items-center border border-b-gray-300 w-full bg-white py-5 sticky top-0 left-80 z-50"
      >
        <div class="px-6 w-full flex flex-row items-center">
          <input
            type="text"
            class="border border-gray-300 bg-transparent rounded-sm py-2 placeholder-gray-400 w-96 px-4 focus:outline-none focus:ring-2 focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="Buscar por cliente, produto, serviço..."
          />
        </div>
      </header>

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
          class="border border-gray-300 bg-white rounded-lg p-6 flex flex-col md:flex-wrap mt-10"
        >
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputNome
              placeholder="Digite o nome completo"
              label="Nome Completo"
              :value="nome"
            />
            <InputEmail
              placeholder="Digite o e-mail"
              label="E-mail"
              :value="email"
            />
            <InputNumeroTelefone
              placeholder="Digite o número de telefone"
              label="Telefone"
              :value="telefone"
            />
          </div>
          <button class="bg-cinza py-2.5 mt-4 w-24 text-white rounded-lg" @click="salvaFuncionario">Cadastrar</button>
        </div>

        <div class="mt-10">
          <CardFuncionario />
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
    };
  },
  methods: {
    salvaFuncionario() {
      this.$notify({
        title: "Sucesso",
        text: "Funcionário cadastrado com sucesso!",
        type: "success",
      });
    },
  },
};
</script>
