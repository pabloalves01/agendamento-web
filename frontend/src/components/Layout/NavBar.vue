<template>
  <div>
    <nav class="bg-vermelho text-white py-5 z-50">
      <div
        class="container mx-auto flex items-center justify-between text-white"
      >
        <p class="text-3xl font-bold cursor-pointer">
          <RouterLink :to="{ name: 'home' }"> Agenda Horário </RouterLink>
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
              <router-link to="/contato">
                <span>CONTATO</span>
              </router-link>
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
              class="flex flex-col fixed right-0 top-36 w-80 h-auto bg-white shadow-2xl z-40"
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
                class="flex flex-col overflow-auto px-4 py-2"
              >
                <div
                  class="border border-gray-200 hover:bg-gray-100 grid grid-cols-[auto_1fr] items-center"
                >
                  <!-- Foto do Produto -->
                  <div
                    class="aspect-square w-20 bg-cinza flex items-center justify-center overflow-hidden"
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
                    <p class="text-sm">R$ {{ produto.preco }}</p>
                  </div>
                </div>
              </div>
              <!-- FIM DOS PRODUTOS -->

              <!-- FOOTER -->
              <div class="bg-gray-100 flex-shrink-0 px-4">
                <div class="mb-4">
                  <div class="flex justify-between mt-2 text-black">
                    <span class="text-sm">Produtos</span>
                    <span class="text-sm">R$ {{ this.valor_produtos }}</span>
                  </div>
                  <div class="flex justify-between my-2 text-black">
                    <span class="text-sm text-green-600">Desconto</span>
                    <span class="text-sm text-green-600">R$ 0,00</span>
                  </div>
                  <div class="flex justify-between my-2 text-black">
                    <span class="text-sm">Total</span>
                    <span class="text-sm">R$ {{ this.valor_total }}</span>
                  </div>
                </div>

                <button
                  v-if="produtos.length > 0"
                  class="w-full bg-vermelho hover:bg-green-600 text-white py-2 rounded-full mb-4"
                >
                  Finalizar Compra
                </button>

                <button
                  v-else
                  class="w-full bg-vermelho text-white py-2 rounded-full mb-4"
                >
                  Continuar Comprando
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
          nome_produto: "Corte Degradê + Barba",
          preco: 35.0,
          imagem: "url_da_imagem_aqui",
        },
        {
          codpro: 1,
          nome_produto: "Sobrancelha",
          preco: 10.0,
          imagem: "url_da_imagem_aqui",
        },
      ],
      valor_total: 0,
      valor_produtos: 0,
    };
  },

  methods: {
    toggleModal() {
      if (this.isLogged) {
        this.valor_total = 0;
        this.valor_produtos = 0;
        this.calculaValorProdutos();
        this.calculaValorTotal();
        this.isCartVisible = !this.isCartVisible;
      } else
        this.$router.push({
          name: "login",
          query: { redirect: this.$route.fullPath },
        });
    },

    calculaValorProdutos() {
      for (let i = 0; i < this.produtos.length; i++) {
        this.valor_produtos += this.produtos[i].preco;
      }
    },

    calculaValorTotal() {
      for (let i = 0; i < this.produtos.length; i++) {
        this.valor_total += this.produtos[i].preco;
      }
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
