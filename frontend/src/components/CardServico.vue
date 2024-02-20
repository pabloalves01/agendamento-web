<template>
  <div
    class="border border-gray-300 bg-gray-100 w-full text-cinza rounded-sm cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out mb-5"
  >
    <div class="px-6 py-4">
      <div class="flex justify-between">
        <div>
          <i class="fa-solid fa-scissors mr-2"></i>
          <span class="font-semibold"> {{ nomeCorte }}</span>
        </div>
        <div class="flex gap-10">
          <div>
            <i class="fa-solid fa-clock mr-2"></i>
            <span> {{ duracao }}</span>
          </div>
          <div>
            <i class="fa-solid fa-cart-shopping mr-2"></i>
            <span> {{ valor }}</span>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <div class="flex">
        <div @click="toggleDropdown" class="cursor-pointer">
          <div
            id="funcionarios-disponiveis"
            class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
          >
            {{ funcionarios }}
          </div>
          <div class="mt-1" v-if="!showDropdown">
            <span class="text-red-400 text-sm"
              >*Selecione um funcionário para continuar.</span
            >
          </div>
        </div>
      </div>

      <div v-if="showDropdown">
        <hr class="my-4" />
        <div class="mb-2">
          <span class="font-semibold">Manha</span>
        </div>
        <div class="flex gap-2">
          <div
            v-for="horarioManha in horariosManha"
            :key="horarioManha"
            class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
          >
            {{ horarioManha }}
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-2">
          <span class="font-semibold">Tarde</span>
        </div>
        <div class="flex gap-2">
          <div
            v-for="horarioTarde in horariosTarde"
            :key="horarioTarde"
            class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
          >
            {{ horarioTarde }}
          </div>
        </div>
      </div>
    </div>
    <button
      v-if="showDropdown"
      class="bg-cinza hover:bg-green-500 transition duration-300 ease-in-out w-full py-2 flex items-center gap-1 justify-center text-white font-semibold rounded-b-sm cursor-pointer"
      @click="this.$router.push('/finalizar-agendamento')"
    >
      <i class="fa-solid fa-check"></i>
      <span>AGENDAR HORARIO</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardServico",
  props: ["nomeCorte", "duracao", "funcionarios", "valor"],
  data() {
    return {
      showDropdown: false,
      horariosManha: ["08:00", "08:30", "09:00", "09:30", "10:00"],
      horariosTarde: ["13:00", "13:30", "14:00", "14:30", "15:00"],
    };
  },
  created() {
    console.log("dados", this.funcionarios);
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
