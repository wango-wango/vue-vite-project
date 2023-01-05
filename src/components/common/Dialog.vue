<script setup>
const props = defineProps({
  modelValue: {
    //是否顯示
    type: Boolean,
    default: true,
  },
  showClose: {
    // 是否顯示Ｘ
    type: Boolean,
    default: true,
  },
  headerTitle: {
    // 標題
    type: String,
    default: "標題",
  },
});
const emit = defineEmits(["closeLogin"]);
const closeLogin = () => {
  emit("closeLogin");
};
</script>
<template>
  <div>
    <el-dialog
      :model-value="modelValue"
      :show-close="showClose"
      :before-close="closeLogin"
    >
      <template #header>
        <div>{{headerTitle}}</div>
      </template>
      <template #default>
      <slot name="default"></slot>  
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/elementUI.scss";
</style>
