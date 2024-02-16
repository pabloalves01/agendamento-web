<template>
  <div>
    <nav class="bg-vermelho text-white py-6">
      <div
        class="container mx-auto flex items-center justify-between text-white"
      >
        <p class="text-3xl font-bold cursor-pointer">
          <RouterLink :to="{ name: 'home' }"> Logo </RouterLink>
        </p>
        <div class="flex items-end items-center">
          <ul class="flex space-x-4 text-sm font-medium">
            <li>
              <a href="#">PLANOS</a>
            </li>
            <li>
              <a href="#">SUPORTE</a>
            </li>
            <li>
              <a href="#">SOBRE</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
            </li>
          </ul>
          <div>
            <button
              class="mx-4 py-2 px-4 text-white bg-cinza rounded-full focus:outline-none"
            >
              <span class="text-sm"> SEJA UM CLIENTE </span>
            </button>
            <button
              class="mr-4 py-2 px-4 text-white bg-cinza rounded-full focus:outline-none"
              @click="this.$router.push('/painel-do-cliente')"
            >
              <span class="text-sm"> PORTAL DO CLIENTE </span>
            </button>
          </div>

          <div
            class="bg-cinza rounded-full w-32 h-10 flex items-center px-4 gap-2 hover:bg-transparent hover:border hover:border-black hover:text-black cursor-pointer transition-all duration-400 border-black"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="text-sm">CARRINHO</span>
          </div>
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
