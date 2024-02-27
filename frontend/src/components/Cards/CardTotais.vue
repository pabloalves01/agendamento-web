<template>

    <div class="px-6 py-8 border border-gray-300  rounded-md flex items-center gap-4">

        <div><UserRoundCheck size="40" /></div>
        <div class="flex flex-col">
            <span class="text-sm">Total de Clientes</span>
            <span class="text-lg font-semibold">999</span>
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
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>