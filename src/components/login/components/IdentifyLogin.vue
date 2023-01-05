<script setup>
import { useMemberStore } from "../../../stores/member";
import { useLoginStore } from "../../../stores/login";
import { useLoadingStore } from "../../../stores/loading";
import SIdentifyVue from "../../common/SIdentify.vue";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// 轉移到其他路徑的方法
const router = useRouter();

// props
const props = defineProps({});

// 直接更新 props 的方式
//emit
const emit = defineEmits(["closeLogin"]);

// store
const memberStore = useMemberStore();
const loginStore = useLoginStore();

// loading
const loadingStore = useLoadingStore();
let { loading } = storeToRefs(loadingStore);

// 登入資料
let form = ref({
  id: "",
  birth: "",
  sid: "",
});

const IdentifyCode = ref("");

onMounted(() => {
  // 生成隨機驗證碼 也同步存進 store
  IdentifyCode.value = loginStore.createIdentifyCode("I", 4);
  console.log(loginStore.IdentifyLogin);
  console.log(IdentifyCode.value);
});

// 更新 IdCode
const refreshIdCode = () => {
  IdentifyCode.value = loginStore.createIdentifyCode("I", 4);
  console.log(loginStore.IdentifyLogin);
  console.log(IdentifyCode.value);
};

// 登入
const login = () => {
  loadingStore.showLoading();
  console.log(formCheck());
  if (formCheck()) {
    // 把表單內容存進去store 裡
    saveToStore();
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
  loginStore.updateData("I", form.value);
  console.log(loginStore.IdentifyLogin);
};
// 確認內容是否正確
let IdIsEmpty = ref(false);
let sidIsWrong = ref(false);
let birthIsEmpty = ref(false);

// 確認帳號是否為空
const checkIdVal = (e) => {
  !e ? (IdIsEmpty.value = true) : (IdIsEmpty.value = false);
};
// 確認密碼是否為空
const checkPwdVal = (e) => {
  !e ? (birthIsEmpty.value = true) : (birthIsEmpty.value = false);
};

// 確認表單內容是否有誤
const formCheck = () => {
  let pass = true;
  IdIsEmpty.value = false;
  sidIsWrong.value = false;
  birthIsEmpty.value = false;
  if (!form.value.id) {
    IdIsEmpty.value = true;
    pass = false;
  }
  if (!form.value.birth) {
    birthIsEmpty.value = true;
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
      <label for="id"><span class="red">*</span>身分證字號</label>
      <input
        id="id"
        type="text"
        v-model="form.id"
        @blur="checkIdVal($event.target.value)"
      />
      <div v-if="IdIsEmpty" class="red">身分證字號為必填</div>
      <label for="birth"><span class="red">*</span>生日</label>
      <input
        id="birth"
        type="birth"
        v-model="form.birth"
        @blur="checkPwdVal($event.target.value)"
        placeholder="yyyymmdd"
      />
      <div v-if="birthIsEmpty" class="red">生日為必填</div>
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
