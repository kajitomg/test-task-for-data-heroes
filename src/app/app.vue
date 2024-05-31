<script setup lang="ts">
import HomePagePreview from '@/widgets/home-page-preview/home-page-preview.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <home-page-preview />
    <router-view />
  </div>
</template>

<style scoped>
</style>
