<template>
  <div class="bg-white border w-5/12 h-auto py-5 px-10">
    <div class="flex flex-row justify-between">
      <span>{{ nomeCorte }}</span>
      <span>{{ duracao }}</span>
    </div>
    <hr class="my-4" />
    <div id="escolha-funcionario" class="py-2.5 grid grid-cols-12 gap-4">
      <div
        v-for="(funcionario, index) in funcionarios"
        :key="index"
        class="bg-gray-200 py-2.5 px-5 col-span-4 shadow-sm border border-gray-300"
      >
        {{ funcionario.nome_funcionario }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardServico",
  // props: {
  //   nomeCorte: {
  //     type: String,
  //     required: true,
  //   },
  //   duracao: {
  //     type: String,
  //     required: true,
  //   },
  //   funcionarios: {
  //     type: Array,
  //     required: true,
  //   },
  // },

  props: [
    "nomeCorte",
    "duracao",
    "funcionarios"
  ],
  created() {
    console.log("dados",this.funcionarios);
  },
};
</script>