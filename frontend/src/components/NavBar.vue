<template>
  <div>
    <nav class="bg-indigo-800 border-b shadow-sm text-white py-6">
      <div
        class="container mx-auto flex items-center justify-between text-white"
      >
        <p class="text-3xl font-bold cursor-pointer">Hora do Corte</p>
        <div class="flex items-end items-center">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-md">Planos</a>
            </li>
            <li>
              <a href="#" class="text-md">Suporte</a>
            </li>
            <li>
              <a href="#" class="text-md">Sobre</a>
            </li>
            <li>
              <a href="#" class="text-md">Contato</a>
            </li>
          </ul>
          <button
            class="ml-6 py-2 px-4 text-white bg-pink-500 hover:bg-pink-400 rounded-sm focus:outline-none"
          >
            Seja um cliente!
          </button>
          <button
            class="ml-6 py-2 px-4 text-white bg-pink-500 hover:bg-pink-400 rounded-sm focus:outline-none"
          >
            Portal do Cliente
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    };
</script>
