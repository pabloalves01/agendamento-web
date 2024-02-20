<template>
  <div>
    <HeaderComponent />
    <NavBar />

    <section class="flex justify-center">
      <div class="container py-10">
        <span class="text-5xl font-semibold text-cinza"
          >Finalizar Agendamento</span
        >

        <div class="grid grid-cols-2 py-5 gap-4">
          <div class="col border border-cinza rounded-lg py-8 px-10">
            <h1 class="text-3xl font-semibold">Resumo do pedido</h1>

            <div class="mt-4 rounded-sm flex justify-between">
              <div>
                <h1 class="font-semibold">Corte Degrade</h1>
              </div>
              <div>30 min</div>
            </div>
            <div class="flex justify-between text-sm mt-1">
              <div>Profissional:</div>
              <div>Pablo Alves</div>
            </div>
            <div class="flex justify-between text-sm mt-1">
              <div>Valor:</div>
              <div>R$ 35.00</div>
            </div>
            <hr class="my-4" />
            <div class="mt-4 rounded-sm flex justify-between">
              <div>
                <h1 class="font-semibold">Sobrancelha</h1>
              </div>
              <div>10 min</div>
            </div>
            <div class="flex justify-between text-sm mt-1">
              <div>Profissional:</div>
              <div>Gustavo Keller</div>
            </div>
            <div class="flex justify-between text-sm mt-1">
              <div>Valor:</div>
              <div>R$ 15.00</div>
            </div>
          </div>

          <div class="col border border-cinza rounded-lg py-8 px-10">
            <div class="text-right">
              <h1 class="text-3xl font-semibold">Resumo do pedido</h1>

              <div class="mt-4 rounded-sm flex justify-between">
                <div>
                  <h1>Valor Produtos:</h1>
                </div>
                <div>R$ 50.00</div>
              </div>
              <div class="flex justify-between mt-1 text-green-500">
                <div>Cupom de Desconto:</div>
                <div class="text-gray-400">#CUPOMDESC10</div>
              </div>
              <div class="flex justify-between mt-1 text-green-500">
                <div>Desconto:</div>
                <div>R$ 00.00</div>
              </div>
              <div class="flex justify-between mt-1">
                <div class="font-semibold">Total:</div>
                <div>R$ 50.00</div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="bg-cinza rounded-sm hover:bg-green-500 transition duration-300 ease-in-out w-full py-2 flex items-center gap-1 justify-center text-white font-semibold rounded-b-sm cursor-pointer"
        >
          <span>FINALIZAR COMPRA</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../Layout/HeaderComponent.vue";
import NavBar from "../Layout/NavBar.vue";
export default {
  name: "FinalizarAgendamento",
  components: { NavBar, HeaderComponent },
};
</script>
