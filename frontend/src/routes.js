import { createRouter, createWebHistory } from "vue-router";
import LoginComponentVue from "./components/LoginComponent.vue";
import HomePage from "./components/HomePage.vue";
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
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isAuthenticated()) next({ name: "login" });
  else next();
});

function isAuthenticated() {
  return Cookie.get("_myapp_token") ? true : false;
}
