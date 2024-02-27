<template>
    <div>
      <label for="nome" class="block mb-1 text-sm font-medium text-zinc-800">{{
        label
      }}</label>
      <input
        type="email"
        class="bg-white w-full border border-gray-300 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
        :placeholder="placeholder"
        :v-model="value"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "InputEmail",
    data() {
      return {
        nome: "",
      };
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
  