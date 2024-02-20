<template>
  <div class="bg-white h-screen">
    <HeaderComponent></HeaderComponent>
    <NavBar></NavBar>
    <section class="w-full h-4/6 overflow-hidden relative">
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
    </section>

    <section class="flex items-center justify-center bg-white">
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
        <div class="grid grid-cols-3 gap-4 my-10 text-white">
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
    </section>

    <section class="flex flex-col items-center justify-center bg-cinza">
      <span class="text-6xl font-semibold text-vermelho py-20"
        >Veja o que dizem nossos clientes:</span
      >
      <div class="container grid grid-cols-4">
        <!-- Feedback 1 -->
        <div class="col-span-2 py-20 flex flex-row items-center gap-6">
          <img
            src="../../../public/assets/images/avatar-feedback-01.png"
            class="rounded-full h-40 w-40 object-cover border"
            alt=""
          />
          <div class="flex flex-col max-w-lg">
            <!-- Aqui, adicionei a classe max-w-md -->
            <span class="text-3xl font-semibold text-white">Carlos Silva</span>
            <span class="text-2xl font-light text-white">Empresário</span>

            <span class="mt-2 text-white">
              "A experiência de agendar meu corte de cabelo pelo app foi
              sensacional! Super prático e consegui escolher o melhor horário
              sem nenhum estresse. Recomendo demais!"
            </span>
          </div>
        </div>

        <div class="col-span-2 py-20 flex flex-row items-center gap-6">
          <img
            src="../../../public/assets/images/avatar-feedback-01.png"
            class="rounded-full h-40 w-40 object-cover border"
            alt=""
          />
          <div class="flex flex-col max-w-lg">
            <!-- Aqui, adicionei a classe max-w-md -->
            <span class="text-3xl font-semibold text-white">Marina Gomes</span>
            <span class="text-2xl font-light text-white">Empresária</span>

            <span class="mt-2 text-white">
              "Adorei a facilidade de reservar a quadra para o jogo de fim de
              semana com a galera. O processo é intuitivo e rápido. Parabéns
              pela ideia incrível!"
            </span>
          </div>
        </div>

        <div class="col-span-2 py-20 flex flex-row items-center gap-6">
          <img
            src="../../../public/assets/images/avatar-feedback-01.png"
            class="rounded-full h-40 w-40 object-cover border"
            alt=""
          />
          <div class="flex flex-col max-w-lg">
            <!-- Aqui, adicionei a classe max-w-md -->
            <span class="text-3xl font-semibold text-white"
              >João Pedro Rocha</span
            >
            <span class="text-2xl font-light text-white">Empresário</span>

            <span class="mt-2 text-white">
              "Fantástico! O sistema de agendamento é muito eficiente e me
              salvou de perder tempo esperando na fila. Além disso, o
              atendimento da barbearia que escolhi foi top!"
            </span>
          </div>
        </div>

        <div class="col-span-2 py-20 flex flex-row items-center gap-6">
          <img
            src="../../../public/assets/images/avatar-feedback-01.png"
            class="rounded-full h-40 w-40 object-cover border"
            alt=""
          />
          <div class="flex flex-col max-w-lg">
            <!-- Aqui, adicionei a classe max-w-md -->
            <span class="text-3xl font-semibold text-white">Letícia Souza</span>
            <span class="text-2xl font-light text-white">Empresária</span>
            <span class="mt-2 text-white">
              "Usei o app para marcar uma sessão de treino na arena e foi super
              fácil. Achei ótimo poder ver todos os horários disponíveis e
              escolher o que melhor se encaixava na minha agenda!"
            </span>
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
  name: "HomePage",
  components: {
    HeaderComponent,
    NavBar,
  },
};
</script>
