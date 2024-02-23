<template>
  <div class="grid grid-cols-[20%_80%] min-h-screen w-screen">
    <aside
      class="bg-white border border-gray-300 h-screen "
    >
      <div id="cabecalho" class="flex py-2 px-5">
        <div class="p-2 w-full flex-col">
          <span class="text-base"
            >Olá, <span class="font-semibold">Pablo Alves!</span></span
          >
          <div>
            <span class="text-sm text-cinza/40">pabloalveszimba@gmail.com</span>
          </div>
        </div>
      </div>

      <hr class="my-2" />

      <div>
        <ul>
          <div class="py-2 pl-5">
            <span class="text-sm font-semibold text-cinza">Seu Negócio</span>
          </div>

          <div class="">
            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200 py-3 text-sm"
            >
              <CalendarCheck :size="22" />Agenda
            </li>
            <li
              class="flex px-5  items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <Scissors :size="22" />Serviços
            </li>
            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <ShoppingBasket :size="22" />Produtos
            </li>

            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <Handshake :size="22" />Clientes
            </li>
          </div>
          <hr class="my-2" />

          <div >
            <div class="py-2 px-5">
              <span class="text-sm font-semibold text-cinza"
                >Administração</span
              >
            </div>

            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <HandCoins :size="22" />Comissões
            </li>
            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <Contact2 :size="22" />Profissionais
            </li>

            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <CircleDollarSign :size="22" />Meu Plano
            </li>

            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <Wallet :size="22" />Fluxo de Caixa
            </li>

            <li
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
            >
              <Gauge :size="22" />Fluxo de Caixa
            </li>
          </div>
          <hr class="my-2" />

          <li><button class="text-red-500 py-3 text-sm ml-5">Sair</button></li>
        </ul>
      </div>
    </aside>

    <main class="bg-red-200  w-full h-full relative">
      <header
        class="flex items-center border border-b-gray-300 w-full bg-white py-5  sticky top-0 left-80  z-50"
      >
        <div class="px-6 w-full flex flex-row items-center">
          <input
            type="text"
            class="border border-gray-300 bg-transparent rounded-sm py-2 placeholder-gray-400 w-96 px-4 focus:outline-none focus:ring-2 focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="Buscar por cliente, produto, serviço..."
          />
        </div>
      </header>

      <div class="p-6">


        
      </div>
    </main>
  </div>
</template>

<script>
import {
  CalendarCheck,
  HandCoins,
  Contact2,
  Scissors,
  ShoppingBasket,
  Handshake,
  CircleDollarSign,
  Wallet,
  Gauge,
} from "lucide-vue-next";
export default {
  components: {
    CalendarCheck,
    HandCoins,
    Contact2,
    Scissors,
    ShoppingBasket,
    Handshake,
    CircleDollarSign,
    Wallet,
    Gauge,
  },
};
</script>

<style>
/* Add any additional styles here */
</style>
