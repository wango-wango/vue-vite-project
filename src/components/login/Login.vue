<script setup>

import { useMemberStore } from "../../stores/member";
import { useLoadingStore } from "../../stores/loading";

import { storeToRefs } from "pinia";

// props
const props = defineProps({
  test: String,
});

// 直接更新 props 的方式
//emit
const emit = defineEmits(["update", "getToken", "heyheyhey"]);

// store
const memberStore = useMemberStore();
const loadingStore = useLoadingStore();

let { loading } = storeToRefs(loadingStore);

//fn
const login = () => {
  loadingStore.showLoading();
  // 這邊可以去後端拿 token
  // 拿完之後回傳到父層
  // 同時存入 store
  let res = "aaa";
  memberStore.getToken(res);
  setTimeout(() => {
    loadingStore.hideLoading();
    emit("update", { showLogin: false });
  }, 1000);
};
const closeLogin = () => {
  emit("update");
};
</script>

<template>
  <el-dialog
    :model-value="true"
    title="Outer Dialog"
    :before-close="closeLogin"
  >
  <template #header>
    <div>
      <h1>會員登入</h1>
    </div>
  </template>
    <template #default>
      <div class="login-form" v-loading="loading" @click="emit('heyheyhey','3345678')">
        <label for=""></label>
        <input type="text" />
        <input type="password" />
        <span>{{ props.test }}</span>
      </div>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeLogin">Cancel</el-button>
        <el-button type="primary" @click="login()"> Login </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
