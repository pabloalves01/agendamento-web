<template>
  <div>
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-3 mt-10">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-zinc-800"
            >Nome</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nome Completo"
            v-model="nome"
          />
        </div>

        <div>
          <label
            for="category"
            class="block mb-2 text-sm font-medium text-zinc-800"
            >Cargo</label
          >
          <select
            id="category"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="selectedCargo"
          >
            <option value="" disabled selected>Selecione uma categoria</option>
            <option value="categoria1">Atendente</option>
            <option value="categoria2">Cabeleireiro</option>
            <option value="categoria3">Outro</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            class="mt-7 text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            @click="save($event)"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 border">
        <tr>
          <th
            v-for="(field, index) in fields"
            :key="index"
            scope="col"
            class="px-6 py-3"
          >
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="index"
          class="border-b bg-gray-50 hover:bg-gray-200"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium whitespace-nowrap text-gray-500"
          >
            {{ product.nome_funcionario }}
          </th>

          <td class="px-6 py-4">
            {{ product.funcao }}
          </td>

          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Excluir</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableComponent",
  data() {
    return {
      nome: "",
      selectedCargo: "",
      fields: [
        { key: "nome_funcionario", label: "Nome", sortable: true },
        { key: "funcao", label: "Cargo", sortable: true },
        { key: "actions", label: "" },
      ],
      products: [],
    };
  },
  async created() {
    await this.getFuncionarios();
  },
  methods: {
    async getFuncionarios() {
      try {
        const response = await axios.get("/api/funcionarios");
        this.products = response.data;
      } catch (error) {
        console.error("Deu ruim na comunicação com o backend: ", error);
      }
    },
    save(event) {
      try {
        event.preventDefault(); // Não deixa recarregar a página
        const params = {
          nome: this.nome,
          cargo: this.selectedCargo,
        };
        axios.post("/api/cadastro-funcionarios", params);
        this.nome = "";
        this.selectedCargo = "";
        this.getFuncionarios();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
