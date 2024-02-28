import InputNome from '../Inputs/InputNome.vue';
<template>
  <div class="bg-gray-50">
    <main class="w-full h-full relative">
      <!-- CONTEUDO BREADCRUMS (TRANSFORMAR EM COMPONENTE DEPOIS)-->
      <div class="px-6 py-10">
        <div class="w-full">
          <div class="flex items-center gap-2 text-sm md:text-xl">
            <Home class="text-gray-400" :size="22" />
            <span class="text-gray-400">Home</span>
            <span class="text-gray-400">/</span>

            <span class="text-gray-400">Serviços</span>
            <span class="text-gray-400">/</span>

            <span class="font-bold">Gerenciar Serviços</span>
          </div>
        </div>
      </div>

      <div class="px-6">
        <div
          class="border border-gray-300 bg-white rounded-lg flex flex-col md:flex-wrap mt-10"
        >
          <div class="border-b border-gray-300 rounded-t-lg px-6 py-5">
            <span class="font-semibold text-md">Adicionar Serviço</span>
          </div>
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-6 my-4">
            <InputNome
              placeholder="Digite o nome do serviço"
              label="Serviço"
              :value="nome_servico"
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
      </div>
    </main>
  </div>
</template>

<script>
import InputNome from "../Inputs/InputNome.vue";
export default {
  components: {
    InputNome,
  },
  data() {
    return {
      nome: "",
    };
  },
};
</script>
