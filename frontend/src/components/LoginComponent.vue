<template>
  <div class="bg-slat-100 flex items-center justify-center h-screen w-full">
    <div class="bg-white h-auto w-2/6 rounded-lg shadow-md">
      <div class="p-20 py-14">
        <p class="font-bold">Login</p>
        <div class="mt-8">
          <label for="email" class="block text-sm font-bold text-gray-700"
            >Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            class="bg-white border shadow-sm rounded-md w-full mt-2 px-3.5 w-full py-1.5 mt-2"
            v-model="email"
          />
        </div>
        <div class="mt-8">
          <label for="email" class="block text-sm font-bold text-gray-700"
            >Senha
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            class="bg-white border shadow-sm rounded-md w-full mt-2 px-3.5 w-full py-1.5 mt-2"
            v-model="password"
          />
        </div>

        <div class="mt-8 flex flex-row justify-between">
          <div class="flex flex-row">
            <button
              type="button"
              class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
              role="switch"
              aria-checked="false"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              ></span>
            </button>
            <p class="ml-4 text-gray-700">Lembrar-me</p>
          </div>

          <div>
            <p class="cursor-pointer text-gray-700 font-bold">
              Esqueceu a senha?
            </p>
          </div>
        </div>

        <div>
          <button
            class="bg-zinc-900 w-full py-1.5 px-3.5 mt-8 rounded-md shadow-md text-white hover:bg-zinc-800"
            @click="submit()"
          >
            Entrar
          </button>
        </div>

        <div class="mt-8">
          <p class="cursor-pointer text-gray-700">
            Não tem uma conta?
            <span class="font-bold text-gray-700">Registre-se</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  created() {
    Cookie.remove("_myapp_token");
  },

  methods: {
    async submit() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post(
          "http://localhost:8000/api/login",
          payload
        );
        console.log("response data aqui:", response.data);
        Cookie.set("_myapp_token", response.data.access_token);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    // const payload = {
    //   email: this.email,
    //   password: this.password,
    // };

    // fetch("http://localhost:3000/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Acess: "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  },

  // autenticated() {
  //   try {
  //     const token = await axios.post("/api/login", {
  //       email: this.email,
  //       senha: this.senha,
  //     });
  //   }
  // },
};
</script>
