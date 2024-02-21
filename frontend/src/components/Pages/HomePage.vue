<template>
  <div class="bg-white h-screen">
    <HeaderComponent />
    <NavBar />

    <section class="w-full">
      <div class="relative">
        <img
          src="/placeholder.svg"
          alt="Image"
          class="h-[800px] object-cover w-full"
        />
        <div class="inset-0 bg-black backdrop-blur absolute"></div>
        <div
          class="container flex flex-col items-center justify-center absolute inset-0 px-4 text-center"
        >
          <div>
            <p
              class="text-2xl font-semibold tracking-tighter text-gray-100 md:text-4xl/relaxed lg:text-5xl/relaxed xl:text-6xl/relaxed dark:text-gray-100"
            >
              Agende seus compromissos
            </p>
            <div>
              <span
                class="text-sm text-gray-300 md:text-base lg:text-lg xl:text-xl"
              >
                Dê Adeus às Filas e às Esperas. Agende de forma simplificada!
              </span>
            </div>
          </div>
          <div class="flex gap-4 justify-center flex-col min-[400px]:flex-row mt-5">
            <button
              class="text-sm bg-white hover:bg-gray-200 border border-gray-300 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
            >
              Novo Agendamento
            </button>
            <button
              class="text-sm bg-white hover:bg-gray-200 border border-gray-300 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
            >
              Meus Agendamentos
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="w-full h-4/6 overflow-hidden relative">
      <img
        src="../../../public/assets/images/background-image-site.jpg"
        class="max-w-full h-auto absolute"
        style="transform: translateY(-25%)"
        alt="Descrição da imagem"
      />
      <div
        class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      >
        <div class="container flex flex-col justify-center mx-auto px-4">
          <p class="text-white font-semibold text-6xl max-w-96">
            Agende seus compromissos
          </p>
          <p class="text-white font-light text-md mt-4">
            Dê Adeus às Filas e às Esperas. Agende de forma simplificada!
          </p>
          <div class="flex flex-row gap-4 mt-4">
            <button
              class="bg-vermelho text-white px-4 py-2 rounded-full"
              @click="this.$router.push('/clientes')"
            >
              Novo Agendamento
            </button>
            <button class="bg-vermelho text-white px-4 py-2 rounded-full">
              Meus Agendamentos
            </button>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="flex items-center justify-center bg-white">
      <div class="container py-20">
        <div class="grid grid-cols-2 flex items-center">
          <div class="col">
            <span class="font-sm font-light">#AGORAFICOUFACIL</span>
            <span class="block text-4xl font-semibold mb-2"
              >Gerencie seus agendamentos</span
            >
          </div>
          <div class="col">
            <p class="text-sm text-gray-600">
              Agende facilmente cabeleireiros, quadras esportivas e mais. Nossa
              plataforma oferece busca rápida, agendamento com poucos cliques e
              lembretes automáticos, garantindo que você nunca mais perca um
              compromisso. Tudo isso de forma prática e sem complicações.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 text-white">
          <div class="bg-cinza">
            <p class="py-48">Reservas Online</p>
          </div>
          <div class="bg-cinza">
            <p class="py-48">Gestão de Agenda</p>
          </div>
          <div class="bg-cinza">
            <p class="py-48">Lembretes via Whatsapp</p>
          </div>
        </div>
        <div class="grid grid-cols-3 flex gap-4 text-gray-600">
          <div class="col">
            Agendamento simplificado com apenas alguns cliques.
          </div>
          <div class="col">
            Visualize e organize horários e compromissos facilmente.
          </div>
          <div class="col">
            Avise seus clientes com notificações via Whatsapp.
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import HeaderComponent from "../Layout/HeaderComponent.vue";
import NavBar from "../Layout/NavBar.vue";
export default {
  name: "HomePage",
  components: { NavBar, HeaderComponent },
};
</script>
