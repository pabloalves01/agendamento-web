<template>
  <div>
    <HeaderComponent />
    <NavBar />
    <section class="w-full bg-cinza h-[700px]">
      <div
        class="container flex flex-col items-center justify-center block h-full w-full"
      >
        <span
          class="text-2xl font-semibold tracking-tighter text-gray-100 md:text-4xl/relaxed lg:text-5xl/relaxed xl:text-6xl/relaxed dark:text-gray-100"
        >
          Pesquise por um estabelecimento
        </span>
        <span
          class="text-sm text-center max-w-72 md:max-w-full text-gray-300 md:text-base lg:text-lg xl:text-xl mb-4"
        >
          Busque de forma rápida e eficiente o estabelecimento que deseja
        </span>
        <InputSearchCliente />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "./Layout/NavBar.vue";
import HeaderComponent from "./Layout/HeaderComponent.vue";
import InputSearchCliente from "./InputSearchCliente.vue";
export default {
  name: "ClientesLista",
  components: {
    NavBar,
    HeaderComponent,
    InputSearchCliente,
  },
};
</script>
<!-- <div
class="container flex flex-col justify-center absolute inset-0 px-4"
>
<div class="text-center flex flex-col items-center justify-center">
  <p
    class="text-2xl font-semibold tracking-tighter text-gray-100 md:text-4xl/relaxed lg:text-5xl/relaxed xl:text-6xl/relaxed dark:text-gray-100"
  >
    Pesquise por um estabelecimento
  </p>
  <div class="max-w-64 md:max-w-full flex flex-col">
    <span
      class="text-sm text-gray-300 md:text-base lg:text-lg xl:text-xl"
    >
      Busque de forma rápida e eficiente o estabelecimento que deseja
    </span>
  </div>
</div>
</div> -->
