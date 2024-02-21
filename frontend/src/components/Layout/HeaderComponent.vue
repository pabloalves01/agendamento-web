<template>
  <div>
    <header class="bg-cinza text-white py-2">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-4"
      >
        <div>
          <p class="text-sm md:text-md font-semibold">
            <span class="cursor-pointer">Promoção de Lançamento!</span>
            Garanta
            <span class="font-bold">20% de desconto</span> no seu primeiro mês
            conosco!
          </p>
        </div>
        <button
          class="text-sm hover:bg-gray-200 border border-gray-300 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
        >
          Saiba mais
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
