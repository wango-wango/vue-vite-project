<script setup>
import TabVue from "../../components/common/Tab.vue";
import QAVue from "./components/QA.vue";
import { ref } from 'vue'; 
const getActiveName = (e) => {
  console.log(e);
  tabName.value = e;
};
let tabName = ref("test1");
const tabsData = [
  { label: "測試1", name: "test1" },
  { label: "測試2", name: "test2" },
  { label: "測試3", name: "test3" },
  { label: "測試4", name: "test4" },
  { label: "測試5", name: "test5" },
];


</script>

<template>
  <TabVue :tabs="tabsData" @active-name="getActiveName" />
  <QAVue v-if="tabName==='test5'"/>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/elementUI.scss";
</style>
