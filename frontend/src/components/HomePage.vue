<template>
  <div class="bg-gray-200 h-screen">
    <header class="flex flex-row bg-blue-900 justify-center text-white py-3">
      <p class="text-md">
        Novo por aqui?
        <span class="font-bold cursor-pointer hover:text-gray-200"
          >Seja um cliente!</span
        >
      </p>
    </header>
    <nav class="bg-gray-900 text-white py-6">
      <div class="container mx-auto flex items-center justify-between">
        <p class="text-3xl font-bold">Logo</p>
        <div class="flex items-end items-center">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-md">Planos</a>
            </li>
            <li>
              <a href="#" class="text-md">Suporte</a>
            </li>
            <li>
              <a href="#" class="text-md">Sobre</a>
            </li>
            <li>
              <a href="#" class="text-md">Contato</a>
            </li>
          </ul>
          <button
            class="ml-6 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Seja um cliente!
          </button>
        </div>
      </div>
    </nav>

    <!-- Conteúdo -->
    <section id="section-home" class="container mx-auto my-20">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo a Barbearia Yuri do Corte!
        </h1>
        <p class="text-gray-600">
          O melhor lugar para encontrar o seu corte de cabelo.
        </p>
        <div class="mt-10">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-full mt-8"
          >
            Novo Agendamento
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-full mt-8"
          >
            Meus Agendamentos
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Seu código JavaScript aqui, se necessário
</script>
