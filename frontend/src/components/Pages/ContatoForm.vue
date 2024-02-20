<template>
  <div>
    <HeaderComponent />
    <NavBar />

    <section class="flex justify-center">
      <div class="container py-10">
        <div class="grid grid-cols-1 gap-5">
          <!-- <div class="col border border-cinza py-10 rounded-sm">
            <div class="bg-green-200">teste 2</div>
          </div> -->
          <div class="col borderpy-10 rounded-sm">
            <h1 class="text-3xl font-semibold">Formulário de Contato</h1>

            <div class="mt-4">
              <label for="">Nome Completo:</label>
              <input
                type="text"
                class="border rounded-md w-full p-2"
                placeholder="Digite seu nome"
              />
            </div>
            <div class="mt-4">
              <label for="">Email</label>
              <input
                type="email"
                class="border rounded-md w-full p-2"
                placeholder="Digite seu email"
              />
            </div>

            <div class="mt-4">
              <label for="">Email</label>
              <textarea
                class="border rounded-md w-full p-2"
                placeholder="Digite sua mensagem"
                maxlength="500"
                rows="8"
              ></textarea>
            </div>
            <div class="mt-4">
              <button
                class="bg-vermelho rounded-sm py-2 w-full text-white font-semibold"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../Layout/HeaderComponent.vue";
import NavBar from "../Layout/NavBar.vue";

export default {
  name: "ContatoForm",
  components: { HeaderComponent, NavBar },
};
</script>
