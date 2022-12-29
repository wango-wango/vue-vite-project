<script setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Login from "../login/Login.vue";
import { useMemberStore } from "../../stores/member";

let showLogin = ref(false); // 是否登入
let showHamburger = ref(false); // 是否開啟漢堡包
let test = ref("123");

const router = useRouter(); // 引用路徑的fn

const memberStore = useMemberStore(); // 引用 memberStore
let { token } = storeToRefs(memberStore);

const updateShowLogin = () => {
  showLogin.value = false;
};
const login = () => {
  showHamburger.value = false;
  if (!token.value) {
    // 判斷token 是否有值，如果沒跳出登入對話筐
    showLogin.value = !token.value;
  }
};

const toMember = () => {
  showHamburger.value = false;
  if(token.value){
    router.push({
      path: "/member",
    });
  }
};

const logout = () => {
  ElMessageBox.confirm("確定要登出?", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
    center: true,
  })
    .then(() => {
      showLogin.value = false;
      memberStore.resetToken();
      ElMessage({
        type: "success",
        message: "logout completed",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "logout failed",
      });
    });
};
</script>

<template>
  <div class="header-container">
    <div class="header-hamburger" @click="showHamburger = !showHamburger">
      <span class="material-icons" v-if="!showHamburger"> menu </span>
      <span class="material-icons" v-else> close </span>
    </div>
    <div class="header-home">
      <RouterLink to="/"
        ><img src="src/assets/img/cathayLfieLogo2.png" alt=""
      /></RouterLink>
    </div>
    <div class="header-other">
      <div class="header-otherPages">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/platform">platform</RouterLink>
      </div>
      <div class="header-login" v-if="!token" @click="login()">
        <span class="material-icons"> person </span>
        <span>立即登入</span>
      </div>
      <div class="header-member" v-else-if="token" @click="toMember()">
        <span class="material-icons"> person </span>
        <span>會員資料</span>
      </div>
      <div class="header-logout" v-if="token" @click="logout()">
        <span class="material-icons"> logout </span>
        <span>登出</span>
      </div>
    </div>
  </div>

  <div class="header-block"></div>
  <!-- 登入對話框、雙向綁定資料流 -->
  <!-- <Login :showLogin="showLogin" @update="updateShowLogin" /> -->
  <!-- 改控是否出現就好 -->
  <Login
    v-if="showLogin"
    @update="updateShowLogin"
    :test="test"
    @heyheyhey="(e) => (test = e)"
  />

  <div>
    <el-drawer
      v-model="showHamburger"
      direction="ltr"
      :with-header="false"
      style="margin-top: 5rem"
      class="hamburger"
    >
      <template #default>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/platform">platform</RouterLink>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";

:deep(.hamburger) {
  width: 100% !important;
  @include rwd($leptop) {
      width: 30%;
    }
}

.header-container {
  z-index: 3000;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .header-hamburger {
    color: $green;
    padding: 1rem;
    span {
      animation: fadein 0.5s ease;
    }
    @include rwd($pc) {
      display: none;
    }
  }
  .header-home {
    height: 100%;
    width: 20rem;

    padding: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .header-other {
    display: flex;
    justify-content: center;
    align-items: center;
    .header-otherPages {
      display: none;
      padding: 2rem;
      @include rwd($pc) {
        display: block;
        display: flex;
        gap: 1rem;
      }
    }
    .header-login,
    .header-logout,
    .header-member {
      height: 100%;
      padding: 1rem 1rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      color: $green;
      span:nth-child(2) {
        display: none;
      }
      @include rwd($pc) {
        span:nth-child(2) {
          display: block;
        }
        padding: 2rem 3rem;
        color: #fff;
        background-color: $green;
      }
    }
  }
}
.header-block {
  width: 100%;
  height: 5rem;
  padding: 1rem;
}
.el-drawer__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    padding: 1rem;
  }
}
</style>
