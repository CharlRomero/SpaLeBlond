import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';


import router from "./routes/index.routes.js";


import "./assets/sass/style.scss";

const app = createApp(App);
AOS.init();

app.use(router);

app.mount("#app");
