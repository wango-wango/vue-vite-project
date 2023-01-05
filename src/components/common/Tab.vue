<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { useHomeStore } from "../../stores/pages/home";
// ------------ 請傳入 tab 陣列 ---------------- \\
/**
example:
const tabsData = [
  { label: "商品說明", name: "test1" },
  { label: "好康優惠", name: "test2" },
  { label: "投保規定", name: "test3" },
  { label: "保單條款", name: "test4" },
  { label: "常見問題", name: "test5" },
];
 */

// props
const props = defineProps({
  tabs: Array,
});

//emit
const emit = defineEmits(["active-name"]);

// 監測現在 tab 狀態
const activeName = ref("");

const homeStore = useHomeStore();
const { tabName } = storeToRefs(homeStore);
// 監測 tabName 變化
watch(tabName, () => {
  activeName.value = tabName.value;
});

onMounted(() => {
  // 初始值為提供的 tabs 第一個
  activeName.value = props.tabs[0]?.name;
  homeStore.setTabName(props.tabs[0]?.name);
  // 最大值-3 因為預設會有至少3個 tabs
  maxPosition.value = props.tabs.length - 3;
});

const handleClick = (tab, event) => {
  console.log("tab:", tab, "event:", event);
};

const handleChange = (name) => {
  console.log(name);
  // 監測tab name 變化 回傳給父層
  emit("active-name", name);
  // 存進去 store
  homeStore.setTabName(name);
};

// 判斷位置
const tabPosition = ref(0);
const maxPosition = ref(0);

const decrease = () => {
  // 低於 0 直接return
  if (tabPosition.value <= 0) return;
  // 位置ㄦ1
  tabPosition.value--;
  // 監測螢幕寬度並設定要移動的距離
  const distance = Math.floor(
    ((screen.width * 0.9) / 3) * tabPosition.value
  );
  // 移動 tabsNav
  translateTabsNav(distance);

  if (tabPosition.value > 0) {
    // 在合理範圍內
    document.querySelector(".tab-next").classList.remove("disabled");
  } else {
    // 超出合理範圍時
    document.querySelector(".tab-back").classList.add("disabled");
  }
};
const increase = () => {
  // 高於最大值 直接return
  if (tabPosition.value >= maxPosition.value) return;
  // 位置＋1
  tabPosition.value++;
  // 監測螢幕寬度並設定要移動的距離
  const distance = Math.floor(
    ((screen.width * 0.9) / 3) * tabPosition.value
  );
  // 移動 tabsNav
  translateTabsNav(distance);

  if (tabPosition.value < maxPosition.value) {
    // 在合理範圍內
    document.querySelector(".tab-back").classList.remove("disabled");
  } else {
    // 超出合理範圍時
    document.querySelector(".tab-next").classList.add("disabled");
  }
};
// 移動 el-tabs__nav
const translateTabsNav = (width) => {
  document.querySelector(
    ".el-tabs__nav"
  ).style.transform = `translateX(-${width}px)`;
};
</script>

<template>
  <div class="tab-container">
    <el-tabs
      v-model="activeName"
      class="demo-tabs"
      @tab-click="handleClick"
      @tab-change="handleChange"
    >
      <template v-for="(tab, index) in tabs" :key="tab.name + index">
        <el-tab-pane :label="tab.label" :name="tab.name"></el-tab-pane>
      </template>
    </el-tabs>
    <button class="tab-back disabled" @click="decrease">
      <span class="material-icons"> arrow_back_ios </span>
    </button>
    <button class="tab-next" @click="increase">
      <span class="material-icons"> arrow_forward_ios </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
.tab-container {
  width: 90%;
  margin: auto;
  position: relative;
  @media screen and (max-width: $mobile) {
    width: 100%;
  }
  .tab-back {
    @media screen and (max-width: $mobile) {
      display: none;
    }
    @include rwd($leptop) {
      display: none;
    }
    border: none;
    background-color: transparent;
    position: absolute;
    top: 40%;
    left: -20px;
    &.disabled {
      span {
        color: #ccc;
      }
    }
    span {
      font-size: 1rem;
    }
  }
  .tab-next {
    @media screen and (max-width: $mobile) {
      display: none;
    }
    @include rwd($leptop) {
      display: none;
    }
    border: none;
    background-color: transparent;
    position: absolute;
    top: 40%;
    right: -20px;
    span {
      font-size: 1rem;
    }
    &.disabled {
      span {
        color: #ccc;
      }
    }
  }
}
</style>
