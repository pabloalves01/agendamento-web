<template>
  <div>
    <HeaderComponent />
    <NavBar />
    
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavBar from "./NavBar.vue";

export default {
  components: { HeaderComponent, NavBar },
};
</script>
