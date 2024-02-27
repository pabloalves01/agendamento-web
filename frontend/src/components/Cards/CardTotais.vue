<template>
    <div>
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="px-6 py-8 border border-gray-300 rounded-md flex flex-row w-96 items-center gap-4"
      >
        <div><UserRoundCheck size="40" /></div>
        <div class="flex flex-col">
          <span class="text-sm">{{ stat.title }}</span>
          <span class="text-lg font-semibold">{{ stat.value }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { UserRoundCheck } from 'lucide-vue-next';
  
  export default {
    name: "CardTotais",
    components: {
      UserRoundCheck,
    },
    data() {
      return {
        stats: [
          {
            title: "Total de Clientes",
            value: "999",
          },
          {
            title: "Total de Funcionários",
            value: "999",
          },
          {
            title: "Total de Serviços",
            value: "999",
          },
          {
            title: "Total de Produtos",
            value: "999",
          },
          {
            title: "Total de Vendas",
            value: "999",
          },
          {
            title: "Total de Agendamentos",
            value: "999",
          },
          {
            title: "Total de Faturamento",
            value: "R$ 999",
          },
        ],
      };
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>