<template>
  <header
    class="flex items-center border border-b-gray-300 w-full bg-white py-5 sticky top-0 left-80 z-50"
  >
    <div class="px-6 w-full flex flex-row items-center justify-between">
      <!-- Adicionei justify-between aqui -->
      <input
        type="text"
        class="border border-gray-300 bg-transparent rounded-sm py-2 placeholder-gray-400 w-96 px-4 focus:outline-none focus:ring-2 focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
        placeholder="Buscar por cliente, produto, serviço..."
      />
      <div class="flex gap-2 items-center">
        <div>
          <img src="../../../public/assets/images/avatar-teste.png" class="border border-cinza rounded-full h-10 w-10" alt="" />
        </div>
        <div class="flex flex-col">

            <span>Pablo Alves</span>
            <span class="text-sm text-gray-600">Barbearia Teste</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPainelCliente",
};
</script>
