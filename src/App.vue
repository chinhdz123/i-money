<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { EXPORT_LAYOUT } from "@/constants/index.js";

export default {
  setup() {
    const route = useRoute();
    console.log(route);
    return {
      layout: computed(() => (route.meta.layout | EXPORT_LAYOUT) + "-layout"),
    };
  },
};
</script>
