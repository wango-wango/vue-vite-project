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
  <div class="bonus-container">
    <div class="bonus-title">{{ title }}</div>
    <div class="bonus-content"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
.bonus-container {
  .bonus-title {
    @extend %title;
  }
  .bonus-content {
  }
}
</style>
