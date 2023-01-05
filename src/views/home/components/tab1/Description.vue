<script setup>
import { onMounted } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "title",
  },
});
onMounted(() => {
  console.log(props?.title);
});
</script>
<template>
  <div class="description-container">
    <div class="description-title">{{ title }}</div>
    <div class="description-content"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
.description-container {
  .description-title {
    @extend %title;
  }
  .description-content {
  }
}
</style>
