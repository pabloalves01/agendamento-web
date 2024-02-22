<template>
  <div>
    <header class="bg-cinza text-white">
      <div
        class="container flex justify-center items-center gap-2 py-2 text-sm"
      >
        <span class="hidden md:block">
          20% de desconto no seu primeiro mês conosco!
        </span>

        <span class="block md:hidden"> Promoção de Lançamento! </span>
        <button
          class="text-sm hover:bg-zinc-700 border border-gray-300 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
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
