<template>
  <div class="flex flex-col md:flex-row">
    <aside
      class="border border-gray-300 w-80 h-screen fixed top-0 left-0 py-6 px-5 z-10"
    >
      <div id="cabecalho" class="flex">
        <div class="bg-cinza h-16 w-20"></div>
        <div class="p-2 w-full flex-col">
          <span class="text-base"
            >Olá, <span class="font-semibold">Pablo Alves!</span></span
          >
          <div>
            <span class="text-sm text-cinza/40">pabloalveszimba@gmail.com</span>
          </div>
        </div>
      </div>

      <hr class="my-5" />

      <ul class="space-y-8">
        <li>Agenda</li>
        <li>Profissionis</li>
        <li>Comissões</li>
        <li>Serviços</li>
        <li>Produtos</li>
        <li>Clientes</li>
        <li>Plano</li>
        <li>Fluxo de Caixa</li>
        <li>Financeiro</li>
        <li>Indicadores</li>
        <li>Notificações</li>
        <li><button class="text-red-500">Sair</button></li>
      </ul>

      <!-- Início da Lista de Tópicos com Ícones -->
      <!-- <ul class="space-y-4">
        <li class="flex items-center"><i class="icono-agenda"></i> Agenda</li>
        <li class="flex items-center">
          <i class="icono-profissionais"></i> Profissionais
        </li>
        <li class="flex items-center">
          <i class="icono-comissoes"></i> Comissões
        </li>
        <li class="flex items-center">
          <i class="icono-servicos"></i> Serviços
        </li>
        <li class="flex items-center">
          <i class="icono-produtos"></i> Produtos
        </li>
        <li class="flex items-center">
          <i class="icono-clientes"></i> Clientes
        </li>
        <li class="flex items-center">
          <i class="icono-meu-plano"></i> Meu Plano
        </li>
        <li class="flex items-center">
          <i class="icono-fluxo-de-caixa"></i> Fluxo de Caixa
        </li>
        <li class="flex items-center">
          <i class="icono-financeiro"></i> Financeiro
        </li>
        <li class="flex items-center">
          <i class="icono-indicadores"></i> Indicadores
        </li>
        <li class="flex items-center">
          <i class="icono-notificacoes"></i> Notificações
        </li>
        <li class="flex items-center">
          <i class="icono-aplicativo"></i> Aplicativo
        </li>
        <li class="flex items-center mt-6">
          <i class="icono-sair"></i> <button class="text-red-500">Sair</button>
        </li>
      </ul> -->

      <!-- Fim da Lista de Tópicos com Ícones -->
    </aside>

    <!-- Espaçamento para o conteúdo principal não ficar atrás da barra lateral fixa -->
    <div class="w-80"></div>

    <header
      class="flex items-center border border-b-gray-300 w-full py-3.5 fixed top-0 left-80 right-0 z-10"
    >
      <div class="px-6 w-full flex flex-row items-center">
        <input
          type="text"
          class="border border-gray-300 bg-transparent rounded-sm py-2 placeholder-gray-400 w-96 px-4 focus:outline-none focus:ring-2 focus:ring-cinza focus:border-transparent transition-all duration-200 ease-in-out"
          placeholder="Buscar por cliente, produto, serviço..."
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
/* Add any additional styles here */
</style>
