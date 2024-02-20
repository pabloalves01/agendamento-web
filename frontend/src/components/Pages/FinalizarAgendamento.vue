<template>
  <div>
    <HeaderComponent />
    <NavBar />

    <section class="flex justify-center">
      <div class="container bg-blue-200 py-10">
        <span class="text-5xl font-semibold text-cinza"
          >Finalizar Agendamento</span
        >

        <div class="grid grid-cols-2 py-5 gap-4">
          <div class="col p-10 border border-cinza">teste</div>
          <div class="col p-10 border border-cinza">teste</div>
        </div>
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
