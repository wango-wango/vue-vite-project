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
  <div class="InsContract-container">
    <div class="InsContract-title">{{ title }}</div>
    <div class="InsContract-content"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
.InsContract-container {
  .InsContract-title {
    @extend %title;
  }
  .InsContract-content {
  }
}
</style>
