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
  <div class="rules-container">
    <div class="rules-title">{{ title }}</div>
    <div class="rules-content"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
.rules-container {
  .rules-title {
    @extend %title;
  }
  .rules-content {
  }
}
</style>
