<template>
    <div class="w-full p-6">
          <div class="flex items-center gap-2 text-xl">
            <Home class="text-gray-400" :size="22" />
            <span class="text-gray-400">Home</span>
            <span class="text-gray-400">/</span>

            <span class="text-gray-400">Funcionarios</span>
            <span class="text-gray-400">/</span>

            <span class="font-semibold">Cadastro de Funcionarios</span>
          </div>
        </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>