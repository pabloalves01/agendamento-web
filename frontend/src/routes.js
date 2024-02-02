import { createRouter, createWebHistory } from "vue-router";
import LoginComponentVue from "./components/LoginComponent.vue";
import HomePage from "./components/HomePage.vue";
export const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginComponentVue,
    },
  ],
});
