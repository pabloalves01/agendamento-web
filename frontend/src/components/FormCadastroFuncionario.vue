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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nome Completo"
            required
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
            required
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
        class="mt-7 text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Cadastrar
      </button>
        </div>
        
      </div>
      
     
    </form>
  </div>
</template>

<script>
export default {
  name: "FormCadastroFuncionario",
};
</script>
