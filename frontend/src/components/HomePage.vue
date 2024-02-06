<template>
  <div class="bg-white h-screen">
    <HeaderComponent></HeaderComponent>
    <NavBar></NavBar>

    <!-- Conteúdo -->
    <section id="section-home" class="container mx-auto my-20">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo a <span class="text-indigo-900">@nome_da_barbearia</span>
        </h1>
        <p class="text-gray-600">
          O melhor lugar para encontrar o seu corte de cabelo.
        </p>
        <div class="mt-10">
          <button
            class="bg-indigo-800 hover:bg-indigo-700 shadow-lg text-white font-bold py-3 px-6 rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md w-full mt-8"
            @click="this.$router.push('/agendamento')"
          >
            Novo Agendamento
          </button>
          <button
            class="bg-indigo-800 hover:bg-indigo-700 shadow-lg text-white font-bold py-3 px-6 rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-full mt-8"
            @click="this.$router.push('/meus-agendamentos')"
          >
            Meus Agendamentos
          </button>
        </div>
      </div>

      <div class="bg-zinc-400 mt-10 h-80 border rounded-sm">
        GOOGLE MAPS API
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    NavBar,
  },
};
</script>
