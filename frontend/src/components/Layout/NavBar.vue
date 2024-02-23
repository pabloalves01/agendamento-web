<template>
  <header class="flex bg-white items-center h-16 px-4 border-b shrink-0">
    <div class="container flex justify-between">
      <div class="flex items-center">
        <a
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6"
          >
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M8.12 8.12 12 12"></path>
            <path d="M20 4 8.12 15.88"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M14.8 14.8 20 20"></path>
          </svg>
        </a>
      </div>
      <div class="flex items-center">
        <div class="hidden md:flex space-x-4 text-sm">
          <a class="font-semibold" href="#">Início</a>
          <a class="text-gray-500 dark:text-gray-400" href="#">Planos</a>
          <a class="text-gray-500 dark:text-gray-400" href="#">Suporte</a>
          <a class="text-gray-500 dark:text-gray-400" href="#">Sobre</a>
        </div>

        <button
          class="mx-4 text-sm hover:bg-gray-200 border border-gray-300 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          @click="this.$router.push('/painel-do-cliente')"
        >
          Painel do Cliente
        </button>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
