<template>
  <div>
    <nav class="bg-vermelho text-white py-6 z-50">
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
              class="mx-4 py-2 px-4 text-white bg-cinza rounded-full focus:outline-none hover:bg-zinc-800"
            >
              <span class="text-sm"> SEJA UM CLIENTE </span>
            </button>
            <button
              class="mr-4 py-2 px-4 text-white bg-cinza rounded-full focus:outline-none hover:bg-zinc-800"
              @click="this.$router.push('/painel-do-cliente')"
            >
              <span class="text-sm"> PORTAL DO CLIENTE </span>
            </button>
          </div>

          <div
            class="bg-cinza rounded-full w-32 h-10 flex items-center px-4 gap-2 hover:bg-zinc-800 transition-all duration-400"
            @click="toggleModal"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="text-sm">CARRINHO</span>
          </div>

          <!-- MODAL DO CARRINHO -->

          <transition name="slide">
            <div
              v-if="isCartVisible"
              class="flex flex-col fixed right-0 top-36 w-80 h-auto bg-white shadow-lg z-40"
            >
              <!-- HEADER -->
              <div class="p-4 bg-gray-100 flex-shrink-0">
                <h2 class="text-lg text-black font-semibold">Seu Carrinho</h2>
                <button
                  class="absolute top-2 right-2 text-xl text-vermelho"
                  @click="toggleModal"
                >
                  ×
                </button>
              </div>
              <!-- FIM DO HEADER -->

              <!-- PRODUTOS -->
              <div
                v-if="produtos.length == 0"
                class="flex flex-col text-center justify-center py-10 text-cinza"
              >
                <i class="text-4xl mb-2 fa-solid fa-cart-arrow-down"></i>
                <p class="font-semibold">O seu carrinho está vazio</p>
                <p class="text-cinza">Adicione um produto para continuar</p>
              </div>

              <div
                v-else
                v-for="(produto, index) in produtos"
                :key="index"
                class="flex flex-col gap-2 overflow-auto p-4"
              >
                <div
                  class="border border-gray-200 hover:bg-gray-100 grid grid-cols-[auto_1fr] items-center gap-2"
                >
                  <!-- Foto do Produto -->
                  <div
                    class="aspect-square w-20 bg-red-500 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src="url_da_imagem_aqui"
                      alt="Nome do Produto"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <!-- Detalhes do Produto -->
                  <div class="text-cinza p-2">
                    <p class="text-sm font-bold">{{ produto.nome_produto }}</p>
                    <p class="text-sm font-semibold">R$ {{ produto.preco }}</p>
                  </div>
                </div>
              </div>
              <!-- FIM DOS PRODUTOS -->

              <!-- FOOTER -->
              <div class="bg-gray-100 mt-auto flex-shrink-0 px-4">
                <div class="flex justify-between my-4 text-black">
                  <span class="text-sm">Total</span>
                  <span class="text-sm">R$ 0,00</span>
                </div>
                <button
                  class="w-full bg-vermelho text-white py-2 rounded-full mb-4"
                >
                  Finalizar Compra
                </button>
              </div>
              <!-- FIM DO FOOTER -->
            </div>
          </transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isCartVisible: false,
      isButtonCartVisible: false,
      isLogged: true,
      produtos: [
        {
          codpro: 1,
          nome_produto: "Produto Teste",
          preco: 10.0,
          imagem: "url_da_imagem_aqui",
        },
      ],
    };
  },

  methods: {
    toggleModal() {
      if (this.isLogged || this.isButtonCartVisible) {
        this.isCartVisible = !this.isCartVisible;
      } // ajustar o login
    },
  },
};
</script>

<style>
/* Estilos da transição 'slide' */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
