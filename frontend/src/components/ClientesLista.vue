<template>
  <div>
    <HeaderComponent />
    <NavBar />
    <section class="flex justify-center bg-cinza">
        <div class="container py-52 flex flex-col">
            <span class="text-6xl font-semibold text-white mb-2">Hora de Agendar!</span>
            <span class="text-md text-white mb-6">Encontre um estabelecimento credenciado perto de você!</span>
            <InputSearchCliente />
        </div>
    </section>
    <section class="container mx-auto py-10">
        <h1 class="text-4xl font-semibold text-cinza mb-4">Sugestões para você</h1>
       <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CardEstabelecimento
                v-for="(estabelecimento, index) in estabelecimentos"
                :key="index"
                :nomeEstabelecimento="estabelecimento.nome"
                :endereco="estabelecimento.endereco"
                :telefone="estabelecimento.telefone"
                :email="estabelecimento.email"
            ></CardEstabelecimento>
        </div> -->
    </section>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavBar from "./NavBar.vue";
import InputSearchCliente from "./InputSearchCliente.vue";
export default {
  name: "ClientesLista",
  components: {
    HeaderComponent,
    NavBar,
    InputSearchCliente,
  },
};
</script>
