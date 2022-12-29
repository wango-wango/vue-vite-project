<script setup>
import { RouterView } from "vue-router";
import LayoutVue from "./layout/Layout.vue";
</script>

<template>
  <LayoutVue >
    <template v-slot:views>
      <div class="main-container">
        <router-view></router-view>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped></style>
