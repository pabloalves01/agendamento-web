import { createRouter, createWebHistory } from "vue-router";
import LoginComponentVue from "./components/LoginComponent.vue";
import HomePage from "./components/HomePage.vue";
import AgendamentoComponent from "./components/AgendamentoComponent.vue";
import MeusAgendamentosComponent from "./components/MeusAgendamentosComponent.vue";
import PainelCliente from "./components/PainelCliente.vue";
import ClientesLista from "./components/ClientesLista.vue";

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
      // eu quero receber os parametros enviados para essa rota

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
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isAuthenticated()) next({ name: "login" });
  else next();
});

function isAuthenticated() {
  return Cookie.get("_myapp_token") ? true : false;
}
