<template>
  <div class="bg-white h-screen">
    <header class="bg-white text-indigo-800 py-4">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left"
      >
        <div>
          <p class="text-sm md:text-md font-semibold">
            🎉 <span class="underline cursor-pointer">Promoção de Lançamento!</span> Garanta
            <span class="font-bold">20% de desconto</span> no seu primeiro mês
            conosco!
          </p>
        </div>
      </div>
    </header>
    <nav class="bg-indigo-800 border-b shadow-sm text-white py-6">
      <div
        class="container mx-auto flex items-center justify-between text-white"
      >
        <p class="text-3xl font-bold cursor-pointer">Hora do Corte</p>
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
          <button class="ml-6 py-2 px-4 text-white bg-pink-500 hover:bg-pink-400 rounded-sm focus:outline-none">
            Seja um cliente!
          </button>
          <button class="ml-6 py-2 px-4 text-white bg-pink-500 hover:bg-pink-400 rounded-sm focus:outline-none">
            Portal do Cliente
          </button>
        </div>
      </div>
    </nav>

    <!-- Conteúdo -->
    <section id="section-home" class="container mx-auto my-20">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo a <span class="text-indigo-900">@nome_da_barbearia</span>
        </h1>
        <p class="text-gray-600">
          O melhor lugar para encontrar o seu corte de cabelo.
        </p>
        <div class="mt-10">
          <button
            class="bg-indigo-800 hover:bg-indigo-700 shadow-lg text-white font-bold py-3 px-6 rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md w-full mt-8"
          >
            Novo Agendamento
          </button>
          <button
            class="bg-indigo-800 hover:bg-indigo-700 shadow-lg text-white font-bold py-3 px-6 rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg w-full mt-8"
          >
            Meus Agendamentos
          </button>
        </div>
      </div>

      <div class="bg-zinc-400 mt-10 h-80 border rounded-sm">
        GOOGLE MAPS API
      </div>
    </section>
  </div>
</template>

<script></script>
