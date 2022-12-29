<script setup>
import HeaderVue from "../components/header/Header.vue";
import FooterVue from "../components/footer/Footer.vue";
import { useLoadingStore } from "../stores/loading";
import { storeToRefs } from "pinia";


const loadingStore = useLoadingStore();
let { loading } = storeToRefs(loadingStore);
</script>
<template>
  <div v-loading="loading">
    <HeaderVue />
    <slot name="views"></slot>
    <FooterVue />
  </div>
</template>

<style lang="scss" scoped></style>
