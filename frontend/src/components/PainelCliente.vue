<template>
  <div>
    <HeaderComponent />
      <NavBar />
    <aside class="border border-gray-300   w-80 h-screen p-5">
      <h2 class="text-cinza font-bold text-xl">My Side Nav</h2>
    </aside>

  </div>
</template>

<script>
import HeaderComponent from "./Layout/HeaderComponent.vue";
import NavBar from "./Layout/NavBar.vue";

export default {
  components: {
    HeaderComponent,
    NavBar,
  },
};
</script>

<style>
/* Add any additional styles here */
</style>