<template>
  <div class="grid grid-cols-[20%_80%] min-h-screen w-screen">
    <aside class="bg-white border border-gray-300 h-screen">
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
              class="flex px-5 items-center gap-2 cursor-pointer hover:bg-gray-200/50 py-3 text-sm"
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

          <div>
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

    <ConteudoPainelCliente />
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
import ConteudoPainelCliente from "./Layout/ConteudoPainelCliente.vue";
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
    ConteudoPainelCliente,
  },
};
</script>

<style>
/* Add any additional styles here */
</style>
