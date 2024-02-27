<template>
  <div
    class="flex bg-white border border-gray-300 w-full rounded-lg justify-between p-5 mt-2.5"
  >
    <div class="flex items-center gap-4">
      <div class="text-cinza"><CircleUser /></div>
      <div class="rounded-full bg-cinza h-10 w-10">
        <div class="rounded-full bg-cinza h-10 w-10">
          <img
            src="../../../public/assets/images/galo-cego.jpg"
            class="rounded-full w-full h-full"
            alt=""
          />
        </div>
      </div>
      <span class="text-cinza font-semibold">Pablo Alves</span>
      <div class="bg-green-600 rounded-lg px-2 text-white">Ativo</div>
      <!-- <div class="bg-red-500 rounded-lg px-2 text-white">Desativado</div> -->
    </div>
    <div class="flex items-center">
      <button
        class="flex items-center gap-2 bg-cinza hover:bg-zinc-800 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-lg mr-4"
      >
      <Settings size="20"/>
        Gerenciar
      </button>
      <button
        class="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-lg"
      ><Trash size="20"/>
        Excluir
      </button>
    </div>
  </div>

  <div
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
      <span class="text-cinza font-semibold">Pablo Alves</span>
      <!-- <div class="bg-green-600 rounded-lg px-2 text-white">Ativo</div> -->
      <div class="bg-red-500 rounded-lg px-2 text-white">Desativado</div>
    </div>
    <div class="flex items-center">
      <button
        class="flex items-center gap-2 bg-cinza hover:bg-zinc-800 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-lg mr-4"
      >
      <Settings size="20"/>
        Gerenciar
      </button>
      <button
        class="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-200 ease-in-out text-white px-4 py-2 rounded-lg"
      ><Trash size="20"/>
        Excluir
      </button>
    </div>
  </div>

</template>

<script>
import { CircleUser, Trash, Settings } from "lucide-vue-next";

export default {
  name: "CardFuncionario",
  components: {
    CircleUser,
    Trash,
    Settings,
     
  },
  methods: {
    teste() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
        type: "success",
      });
      console.log("teste");
    },
  },
};
</script>
