<script setup>
import { onMounted, ref } from "vue";

const activeName = ref("");
// props
const props = defineProps({
  tabs: Array,
});

//emit
const emit = defineEmits(["active-name"]);

onMounted(() => {
  console.log(props.tabs);
  // 初始值為提供的 tabs 第一個
  activeName.value = props.tabs[0]["name"];
  maxPosition.value = props.tabs.length - 3;
  console.log(maxPosition.value);
});

const handleClick = (tab, event) => {
  console.log("tab:", tab, "event:", event);
};

const handleChange = (name) => {
  console.log(name);
  emit("active-name", name);
};

const tabPosition = ref(0);
const maxPosition = ref(0);

const decrease = () => {
  if (tabPosition.value <= 0) return;
  // 如果現在位置超過0
  tabPosition.value--;
  const windowWidth =Math.floor(screen.width*0.9/3*tabPosition.value);
  if (tabPosition.value > 0) {
    document.querySelector(".tab-next").classList.remove("disabled");
    document.querySelector(".el-tabs__nav").style.transform = `translateX(-${windowWidth}px)`;

  } else {
    document.querySelector(".tab-back").classList.add("disabled");
    document.querySelector(".el-tabs__nav").style.transform = `translateX(-${windowWidth}px)`;

  }
};
const increase = () => {
  if (tabPosition.value >= maxPosition.value) return;
  tabPosition.value++;
  const windowWidth =Math.floor(screen.width*0.9/3*tabPosition.value);

  if (tabPosition.value < maxPosition.value) {
    document.querySelector(".tab-back").classList.remove("disabled");
    document.querySelector(".el-tabs__nav").style.transform = `translateX(-${windowWidth}px)`;
  } else {
    console.log("add");
    document.querySelector(".tab-next").classList.add("disabled");
    document.querySelector(".el-tabs__nav").style.transform = `translateX(-${windowWidth}px)`;
  }
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
  @media  screen and (max-width: $mobile) {
      width: 100%;
    }
  .tab-back {
    @media  screen and (max-width: $mobile) {
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
    @media  screen and (max-width: $mobile) {
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
