<script setup>
import { onMounted, ref, watch, onBeforeMount, reactive, shallowRef } from "vue";
// pinia
import { useHomeStore } from "../../stores/pages/home";
import { storeToRefs } from "pinia";
// components
import TabVue from "../../components/common/Tab.vue";
import BannerVue from "./components/Banner.vue";
import DescriptionVue from "./components/tab1/Description.vue";
import BonusVue from "./components/tab2/Bonus.vue";
import RulesVue from "./components/tab3/Rules.vue";
import InsContractVue from "./components/tab4/InsContract.vue";
import QAVue from "./components/tab5/QA.vue";

const homeStore = useHomeStore();
const { tabName } = storeToRefs(homeStore);

const tabsName = ref("1");
const tabsData = ref([]);

const getActiveName = (e) => {
  console.log(e);
  tabsName.value = e;
  homeStore.setTabName(e);
};
const components = [DescriptionVue, BonusVue, RulesVue, InsContractVue, QAVue];
watch(tabName, () => {
  console.log("tabNameChange!", tabName.value);
  tabsName.value = tabName.value;
});
// 假裝後端傳值
tabsData.value = [
  { label: "商品說明", name: "1", title: "商品特色" },
  { label: "好康優惠", name: "2", title: "好康優惠" },
  { label: "投保規定", name: "3", title: "投保規定" },
  { label: "保單條款", name: "4", title: "保單條款" },
  { label: "常見問題", name: "5", title: "常見問題" },
];

onBeforeMount(() => {});
</script>

<template>
  <BannerVue />
  <TabVue :tabs="tabsData" @active-name="getActiveName" />
  <component
    :is="components[tabsName-1]"
    :title="tabsData[tabsName - 1]?.title"
  ></component>
  <!-- <DescriptionVue v-if="tabsName === '1'" :title="tabsData[tabsName-1]?.title"/>
  <BonusVue v-if="tabsName === '2'" :title="tabsData[tabsName-1]?.title"/>
  <RulesVue v-if="tabsName === '3'" :title="tabsData[tabsName-1]?.title"/>
  <InsContractVue v-if="tabsName === '4'" :title="tabsData[tabsName-1]?.title"/>
  <QAVue v-if="tabsName === '5'" :title="tabsData[tabsName-1]?.title"/> -->
</template>

<style lang="scss" scoped>
@import "src/assets/scss/elementUI.scss";
</style>
