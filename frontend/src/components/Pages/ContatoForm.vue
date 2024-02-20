<template>
  <div>
    <HeaderComponent />
    <NavBar />

    <section class="flex justify-center py-10">
      <div class="container bg-red-200 py-10">
        <div class="grid grid-cols-2">
          <div class="col bg-green-200 py-10">teste1</div>
          <div class="col bg-blue-200 py-10">teste1</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../Layout/HeaderComponent.vue";
import NavBar from "../Layout/NavBar.vue";

export default {
  name: "ContatoForm",
  components: { HeaderComponent, NavBar },
};
</script>
