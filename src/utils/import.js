import { defineAsyncComponent } from "vue";

export function resgisterGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/authLayout.vue"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/defaultLayout.vue"))
  );
}
