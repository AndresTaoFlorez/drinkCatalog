import { createApp } from "vue";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { createPinia } from "pinia";
import "./index.css";

import App from "./App.vue";
import router from "./router";

gsap.registerPlugin(CSSPlugin);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.console = console;

app.mount("#app");

document.fonts.ready.then(() => {
  document.body.classList.add("app-ready");
});
