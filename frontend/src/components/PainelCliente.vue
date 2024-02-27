<template>
  <div class="grid grid-cols-[20%_80%] min-h-screen w-screen">
    <AsideComponent/>

    <main class="w-full h-full relative">
      <HeaderPainelCliente />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderPainelCliente from "./Layout/HeaderPainelCliente.vue";
import AsideComponent from "./Layout/AsideComponent.vue";
export default {
  components: {
    HeaderPainelCliente,
    AsideComponent,
},
};
</script>

<style>
/* Add any additional styles here */
</style>
