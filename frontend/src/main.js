import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import "./index.css";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Notifications from '@kyvg/vue3-notification'


library.add(fas);

axios.defaults.baseURL = "http://localhost:8000";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "_myapp_token"
)}`;

window.axios = axios;

const app = createApp(App);
app.component("VueDatePicker", VueDatePicker);
app.use(Notifications)
app.use(router).mount("#app");
