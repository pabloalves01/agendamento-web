<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavBar></NavBar>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "AgendamentoComponent",
  components: {
    NavBar,
    HeaderComponent,
  },
};
</script>
