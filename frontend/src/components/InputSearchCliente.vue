<template>
  <div>
    <form class="max-w-md">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <!-- Your search icon SVG here -->
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-vermelho placeholder-white text-white"
          placeholder="Digite aqui o nome do estabelecimento"
          v-model="searchQuery"
          @input="updateSuggestions"
          required
        />
        <ul
          class="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 overflow-hidden"
          v-show="filteredSuggestions.length > 0"
        >
          <li
            v-for="(suggestion, index) in filteredSuggestions"
            :key="index"
            class="p-4 hover:bg-gray-100 cursor-pointer flex flex-col gap-2 border-b border-gray-200 last:border-0"
            @click="selectSugestao(suggestion)"
          >
            <div class="font-bold">{{ suggestion.name }}</div>
            <div class="text-sm text-gray-600">{{ suggestion.address }}</div>
          </li>
        </ul>
        <button
          type="button"
          class="text-white absolute end-2.5 bottom-2.5 bg-cinza hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          @click.prevent="buscar"
        >
          BUSCAR
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedClientId: null,
      suggestions: [
        { name: "Maninho Barbearia", id: 1, address: "Rua dos Bobos, nº 0" },
        {
          name: "Yuri do Corte",
          id: 2,
          address: "Avenida das Tesouras, nº 123",
        },
        { name: "Dellavega", id: 3, address: "Praça dos Clippers, nº 321" },
        { name: "Arena Maciel", id: 4, address: "Praça dos Clippers, nº 321" },
      ],
      filteredSuggestions: [],
    };
  },
  methods: {
    updateSuggestions() {
      if (this.searchQuery.length > 0) {
        this.filteredSuggestions = this.suggestions.filter((cliente) =>
          cliente.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredSuggestions = [];
      }
    },
    selectSugestao(suggestion) {
      this.searchQuery = suggestion.name;
      this.selectedClientId = suggestion.id; // Guarda o ID do cliente selecionado
      this.filteredSuggestions = [];
    },
    buscar() {
      if (this.selectedClientId) {
        this.$router.push({
          name: "ClientDetails",
          params: { id: this.selectedClientId },
        });
        // Supondo que a rota para os detalhes do cliente se chame 'ClientDetails' e espere um 'id' como parâmetro
      } else {
        alert("Por favor, selecione um cliente da lista!");
      }
    },
  },
};
</script>
