<template>
  <navigationBrand />
  <slot />
</template>

<script>
import navigationBrand from '@/components/navigationBrand.vue'
export default {
  components: { navigationBrand }
}
</script>
