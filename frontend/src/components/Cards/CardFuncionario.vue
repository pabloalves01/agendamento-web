<template>
  <div v-if="funcionarios.length > 0">
    <div
      v-for="(funcionario, index) in funcionarios"
      :key="index"
      class="flex bg-white border border-gray-300 w-full rounded-lg justify-between p-5 mt-2.5"
    >
      <div class="flex items-center gap-4">
        <div class="text-cinza"><CircleUser /></div>
        <div class="rounded-full bg-cinza h-10 w-10">
          <div class="rounded-full bg-cinza h-10 w-10">
            <img
              src="../../../public/assets/images/avatar-gustavo.jpg"
              class="rounded-full w-full h-full"
              alt=""
            />
          </div>
        </div>
        <span class="text-cinza font-semibold">{{ funcionario.nome }}</span>
        <!-- <div class="bg-green-600 rounded-lg px-2 text-white">Ativo</div> -->
        <div
          v-if="funcionario.flag_ativo == 0"
          class="bg-red-500 rounded-lg px-2 text-white"
        >
          Desativado
        </div>
        <div v-else class="bg-green-600 rounded-lg px-2 text-white">Ativo</div>
      </div>
      <div class="flex items-center">
        <button
          class="flex items-center gap-2 bg-cinza hover:bg-zinc-800 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-lg mr-4"
        >
          <Settings size="16" />
          Gerenciar
        </button>
        <button
          class="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-lg"
          @click="deleteFuncionario(funcionario.id)"
        >
          <Trash size="16" />
          Excluir
        </button>
      </div>
    </div>
  </div>

  <div v-else class=" py-10">
    <div class="flex justify-center items-center">
      <div class="flex flex-col text-center md:flex-row text-gray-500 items-center gap-4">
        <UserRoundX size="64" />
        <span class=" font-semibold text-3xl"
          >Nenhum funcionário cadastrado.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { CircleUser, Trash, Settings, UserRoundX } from "lucide-vue-next";
import axios from "axios";

export default {
  name: "CardFuncionario",
  components: {
    CircleUser,
    Trash,
    Settings,
    UserRoundX,
  },
  data() {
    return {
      funcionarios: [],
    };
  },
  created() {
    this.getEmployees();
  },

  methods: {
    async getEmployees() {
      try {
        const response = await axios.get("api/funcionarios");
        console.log(response.data);
        this.funcionarios = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    teste() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
        type: "success",
      });
      console.log("teste");
    },
    async deleteFuncionario(id) {
      console.log("Funcionário excluído com sucesso!", id);
      this.$notify({
        title: "Sucesso",
        text: "Funcionário excluído com sucesso!",
        type: "success",
      });

      this.funcionarios = this.funcionarios.splice(id, 1);
      await this.getEmployees();
    },
  },
};
</script>
