<template>
  <div class="flex flex-col md:flex-row">
    <aside
      class="border border-gray-300 w-80 h-screen fixed top-0 left-0 py-6 px-5 z-10"
    >
      <div id="cabecalho" class="flex">
        <div class="bg-cinza h-16 w-20"></div>
        <div class="p-2 w-full flex-col">
          <span class="text-base"
            >Olá, <span class="font-semibold">Pablo Alves!</span></span
          >
          <div>
            <span class="text-sm text-cinza/40">pabloalveszimba@gmail.com</span>
          </div>
        </div>
      </div>

      <hr class="my-5" />

      <ul>
        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-2"
        >
          <CalendarCheck :size="22" />Agenda
        </li>
        <hr class="my-2" />
        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <HandCoins :size="22" />Comissões
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <Contact2 :size="22" />Profissionais
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <Scissors :size="22" />Serviços
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <ShoppingBasket :size="22" />Produtos
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <Handshake :size="22" />Clientes
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <CircleDollarSign :size="22" />Meu Plano
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <Wallet :size="22" />Fluxo de Caixa
        </li>
        <hr class="my-2" />

        <li
          class="flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-2"
        >
          <Gauge :size="22" />Fluxo de Caixa
        </li>
        <hr class="my-2" />

        <li><button class="text-red-500">Sair</button></li>
      </ul>
    </aside>

    <div class="w-80"></div>

    <header
      class="flex items-center border border-b-gray-300 w-full py-3.5 fixed top-0 left-80 right-0 z-10"
    >
      <div class="px-6 w-full flex flex-row items-center">
        <input
          type="text"
          class="border border-gray-300 bg-transparent rounded-sm py-2 placeholder-gray-400 w-96 px-4 focus:outline-none focus:ring-2 focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
          placeholder="Buscar por cliente, produto, serviço..."
        />
      </div>
    </header>
    <main class="flex-1">teste</main>
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
