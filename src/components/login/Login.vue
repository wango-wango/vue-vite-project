<script setup>

import { ref } from "vue";
import IdentifyLoginVue from "./components/IdentifyLogin.vue";
import NormalLoginVue from "./components/NormalLogin.vue";
import DialogVue from "../common/Dialog.vue";


//emit
const emit = defineEmits(["closeLogin", "getToken"]);

// tabs
const activeName = ref("normal");
const handleClick = (tab, event) => {
  console.log(tab, event);
  console.log(activeName.value);
};

// 點擊對話框外 關閉login
const closeLogin = () => {
  emit("closeLogin");
};
</script>

<template>
  <div>
    <DialogVue @closeLogin="closeLogin" headerTitle="會員登入">
      <template v-slot:default>
        <div class="member-tab">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="一般登入" name="normal"></el-tab-pane>
            <el-tab-pane label="驗證碼登入" name="CAPTCHA"></el-tab-pane>
          </el-tabs>
        </div>
        <NormalLoginVue v-if="activeName === 'normal'" @closeLogin="closeLogin"></NormalLoginVue>
        <IdentifyLoginVue v-else @closeLogin="closeLogin"></IdentifyLoginVue>
      </template>
    </DialogVue>




  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/elementUI.scss";
:deep(.el-tabs__item) {
  width: 50%;
}
</style>
