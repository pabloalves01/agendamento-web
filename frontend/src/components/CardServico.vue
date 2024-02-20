<template>
  <div
    class="border border-gray-300 bg-gray-100 px-6 py-4 w-full text-cinza rounded-sm cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out"
  >
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
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        Pablo
      </div>
    </div>
    <hr class="my-4" />
    <div class="mb-2">
      <span class="font-semibold">Manha</span>
    </div>
    <div class="flex gap-2">
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        08:00
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        08:30
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        09:00
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        09:30
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        10:00
      </div>
    </div>
    <hr class="my-4" />
    <div class="mb-2">
      <span class="font-semibold">Tarde</span>
    </div>
    <div class="flex gap-2">
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        13:00
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        13:30
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        14:00
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        14:30
      </div>
      <div
        class="border border-gray-500 py-2 px-2 hover:bg-vermelho hover:text-white rounded-sm"
      >
        15:00
      </div>
    </div>
  </div>
  <div
    class="bg-cinza hover:bg-green-500 transition duration-300 ease-in-out w-full py-2 flex items-center gap-1 justify-center text-white font-semibold mb-10 rounded-b-sm cursor-pointer"
  >
    <i class="fa-solid fa-check"></i>
    <span>AGENDAR HORARIO</span>
  </div>
</template>

<script>
export default {
  name: "CardServico",
  props: ["nomeCorte", "duracao", "funcionarios", "valor"],
  created() {
    console.log("dados", this.funcionarios);
  },
};
</script>
