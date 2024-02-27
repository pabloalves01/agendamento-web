<template>
  <div>
    <label for="nome" class="block mb-1 text-sm font-medium text-zinc-800">{{
      label
    }}</label>
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <SquareUserRound size="20" class="text-gray-400" />
      </span>
      <input
        type="text"
        class="pl-8 bg-white w-full border border-gray-300 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
        :placeholder="placeholder"
        :v-model="value"
      />
    </div>
  </div>
</template>

<script>
import { SquareUserRound } from "lucide-vue-next";

export default {
  name: "InputNome",
  data() {
    return {
      nome: "",
    };
  },
  components: {
    SquareUserRound,
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
