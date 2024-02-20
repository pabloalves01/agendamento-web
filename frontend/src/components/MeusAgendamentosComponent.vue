<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavBar></NavBar>

    <section class="container mx-auto my-20">
      <h1>Meus Agendamentos</h1>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "./Layout/HeaderComponent.vue";
import NavBar from "./Layout/NavBar.vue";

export default {
  name: "MeusAgendamentosComponent",
  components: {
    NavBar,
    HeaderComponent,
  },
};
</script>
