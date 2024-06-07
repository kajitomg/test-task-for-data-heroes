<script setup lang='ts'>

import PageLayout from '@/shared/components/page-layout/page-layout.vue';
import HomePageCharacter from '@/widgets/home-page-character/home-page-character.vue';
import HomePageFilters from '@/widgets/home-page-filters/home-page-filters.vue';
import HomePagePreview from '@/widgets/home-page-preview/home-page-preview.vue';
import { onMounted } from 'vue';
import { useCharacterStore } from '@/entities/character/store';

const character = useCharacterStore();

const { init } = character;

onMounted(() => {
  init();
});

</script>

<template>
  <page-layout>
    <home-page-preview />
    <home-page-filters />
    <home-page-character />
  </page-layout>
</template>

<style scoped>
.list {
  container-type: inline-size;
  padding: 81px 0;
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  gap: 24px;

  @media (max-width: 616px) {
    padding: 27px;
  }
}
</style>
