<script setup>
import { useMemberStore } from "../../../stores/member";
import { useLoginStore } from "../../../stores/login";
import { useLoadingStore } from "../../../stores/loading";
import SIdentifyVue from "../../common/SIdentify.vue";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// props
const props = defineProps({});

// 直接更新 props 的方式
//emit
const emit = defineEmits(["closeLogin"]);

// store
const memberStore = useMemberStore();
const loadingStore = useLoadingStore();
const loginStore = useLoginStore();

// loading
let { loading } = storeToRefs(loadingStore);

// 登入資料
let form = ref({
  account: "",
  password: "",
  sid: "",
});

const IdentifyCode = ref("");

onMounted(() => {
  // 生成隨機驗證碼 也同步存進 store
  IdentifyCode.value = loginStore.createIdentifyCode("N", 4);
  console.log(loginStore.normalLogin);
  console.log(IdentifyCode.value);
});

// 更新 IdCode
const refreshIdCode = () => {
  IdentifyCode.value = loginStore.createIdentifyCode("N", 4);
  console.log(loginStore.normalLogin);
  console.log(IdentifyCode.value);
};

//fn
const login = () => {
  loadingStore.showLoading();
  console.log(formCheck());
  if (formCheck()) {
    // 這邊可以去後端拿 token
    // 拿完之後回傳到父層
    // 同時存入 store
    let res = "aaa";
    memberStore.getToken(res);
    setTimeout(() => {
      loadingStore.hideLoading();
      emit("closeLogin");
    }, 1000);
  } else {
    setTimeout(() => {
      loadingStore.hideLoading();
    }, 1000);
  }
};

// 點擊對話框外
const closeLogin = () => {
  emit("closeLogin");
};

const saveToStore = () => {
  console.log(form.value);
  loginStore.updateData("N", form.value);
  console.log(loginStore.normalLogin);
};
// 確認內容是否正確
let accountIsEmpty = ref(false);
let sidIsWrong = ref(false);
let passwordIsEmpty = ref(false);

// 確認帳號是否為空
const checkAccVal = (e) => {
  !e ? (accountIsEmpty.value = true) : (accountIsEmpty.value = false);
};
// 確認密碼是否為空
const checkPwdVal = (e) => {
  !e ? (passwordIsEmpty.value = true) : (passwordIsEmpty.value = false);
};

// 確認表單內容是否有誤
const formCheck = () => {
  let pass = true;
  accountIsEmpty.value = false;
  sidIsWrong.value = false;
  passwordIsEmpty.value = false;
  if (!form.value.account) {
    accountIsEmpty.value = true;
    pass = false;
  }
  if (!form.value.password) {
    passwordIsEmpty.value = true;
    pass = false;
  }
  if (form.value.sid !== IdentifyCode.value) {
    sidIsWrong.value = true;
    pass = false;
  }
  return pass;
};
// 切換至忘記密碼頁面
const toForget = () => {
  router.push({ path: "/forgetPwd" });
  emit("closeLogin");
};
// 切換到註冊頁面
const toRegister = () => {
  router.push({ path: "/register" });
  emit("closeLogin");
};
</script>

<template>
  <div>
    <div class="login-form" v-loading="loading">
      <label for="account"><span class="red">*</span>帳號</label>
      <input
        id="account"
        type="text"
        v-model="form.account"
        @blur="checkAccVal($event.target.value)"
      />
      <div v-if="accountIsEmpty" class="red">帳號為必填</div>
      <label for="password"><span class="red">*</span>密碼</label>
      <input
        id="password"
        type="password"
        v-model="form.password"
        @blur="checkPwdVal($event.target.value)"
      />
      <div v-if="passwordIsEmpty" class="red">密碼為必填</div>
      <div class="sid-container">
        <input type="text" v-model="form.sid" @focus="sidIsWrong = false" />
        <div v-if="sidIsWrong" class="red">驗證碼錯誤</div>
        <SIdentifyVue :identifyCode="IdentifyCode"></SIdentifyVue>
        <span class="material-icons" @click="refreshIdCode"> replay </span>
      </div>
    </div>
    <div class="login-footer">
      <!-- <button class="login-btn-cancel" @click="closeLogin">Cancel</button> -->
      <div class="login-btn">
        <button class="login-btn-confirm" @click="login()">立即登入</button>
      </div>
      <!-- <button @click="saveToStore">save</button> -->
      <div class="login-next">
        <div class="forget-password" @click="toForget()">忘記密碼</div>
        <span></span>
        <div class="assign-new-account" @click="toRegister()">申請註冊</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/elementUI.scss";
@import "src/assets/scss/form.scss";

.login-form {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @extend %form;
  .sid-container {
    @extend %sid;
  }
}

.login-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  .login-btn {
    display: flex;
    justify-content: center;
    @extend %btn-confirm;
  }
  .login-next {
    margin: 1rem;
    font-size: 1.4rem;
    color: $orange;
    display: flex;
    gap: 1rem;
    justify-content: center;
    span{
        width: 1px;
        background-color: $gray-light;
    }
  }
}

</style>
