import { createRouter, createWebHistory } from "vue-router";
import LoginComponentVue from "./components/LoginComponent.vue";
import HomePage from "./components/Pages/HomePage.vue";
import AgendamentoComponent from "./components/AgendamentoComponent.vue";
import MeusAgendamentosComponent from "./components/MeusAgendamentosComponent.vue";
import PainelCliente from "./components/PainelCliente.vue";
import ClientesLista from "./components/ClientesLista.vue";
import FinalizarAgendamento from "./components/Pages/FinalizarAgendamento.vue";
import ContatoForm from "./components/Pages/ContatoForm.vue";
import FuncionariosConteudo from "./components/Layout/FuncionariosConteudo.vue";
import ServicosConteudo from "./components/Layout/ServicosConteudo.vue";

import Cookie from "js-cookie";

export const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponentVue,
    },
    {

      path: "/clientes",
      name: "clientes",
      component: ClientesLista,
    },

    {
      path: "/agendamento",
      name: "agendamento",
      component: AgendamentoComponent,
    },
    {
      path: "/meus-agendamentos",
      name: "meus-agendamentos",
      component: MeusAgendamentosComponent,
    },
    {
      path: "/painel-do-cliente",
      name: "painel-do-cliente",
      component: PainelCliente,
      children: [
        {
          path: "/painel-do-cliente/funcionarios",
          name: "painel-do-cliente.funcionarios",
          component: FuncionariosConteudo
        },
        {
          path: "/painel-do-cliente/servicos",
          name: "painel-do-cliente.servicos",
          component: ServicosConteudo
        }
      ]
    },
    {
      path: "/finalizar-agendamento",
      name: "finalizar-agendamento",
      component: FinalizarAgendamento,
    },
    {
      path: "/contato",
      name: "contato",
      component: ContatoForm,
    },
    
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isAuthenticated()) next({ name: "login" });
  else next();
});

function isAuthenticated() {
  return Cookie.get("_myapp_token") ? true : false;
}
