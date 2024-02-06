import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "_myapp_token"
)}`;

window.axios = axios;

createApp(App).use(router).mount("#app");

