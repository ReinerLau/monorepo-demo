import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MyButton } from "@packages/core";

createApp(App).use(MyButton).mount("#app");
