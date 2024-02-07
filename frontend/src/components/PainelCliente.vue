<template>
  <div>
    <SideNav />
    <div class="p-4 sm:ml-64">
      <div
        class="p-4 h-full border-gray-200 rounded-lg dark:border-gray-700 mt-14"
      >
        <div class="mt-8">
          <span class="text-4xl font-semibold text-zinc-800"
            >Gerenciamento de Funcionarios</span
          >
          <p class="mt-2">
            Cadastre, exclua ou altere os funcionários do seu negócio de maneira
            simplificada.
          </p>
        </div>


        <div>
          <FormCadastroFuncionario />

          <TableComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormCadastroFuncionario from "./FormCadastroFuncionario.vue";
import SideNav from "./SideNav.vue";
import TableComponent from "./TableComponent.vue";
export default {
  components: {
    SideNav,
    TableComponent,
    FormCadastroFuncionario
},
};
</script>
