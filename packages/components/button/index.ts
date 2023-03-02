import { App, Plugin } from "vue";
import Button from "./src/index.vue";

export const MyButton: Plugin = {
  install(app: App) {
    app.component("MyButton", Button);
  },
};
