import { createRouter, createWebHistory } from "vue-router";
import LoginComponentVue from "./components/LoginComponent.vue";
import HomePage from "./components/HomePage.vue";
import AgendamentoComponent from "./components/AgendamentoComponent.vue";
import MeusAgendamentosComponent from "./components/MeusAgendamentosComponent.vue";
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
      path: "/agendamento",
      name: "agendamento",
      component: AgendamentoComponent,
    },
    {
      path: "/meus-agendamentos",
      name: "meus-agendamentos",
      component: MeusAgendamentosComponent,
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
