<template>
  <div>
    <header class="bg-cinza text-branco py-3">
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
        <button class="bg-vermelho py-2 px-4 rounded-full">Saiba mais</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
