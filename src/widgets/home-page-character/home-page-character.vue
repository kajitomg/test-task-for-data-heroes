<script
    setup
    lang='ts'
>
import { useCharacterStore } from '@/entities/character/store';
import HomePageCharacterList from '@/widgets/home-page-character-list/home-page-character-list.vue';
import HomePageCharacterPagination from '@/widgets/home-page-character-pagination/home-page-character-pagination.vue';
import { storeToRefs } from 'pinia';

const character = useCharacterStore();
const { status } = storeToRefs(character);

</script>

<template>
  <div
    class='home-page-character'
  >
    <home-page-character-list />
    <home-page-character-pagination />
  </div>
</template>

<style
    scoped
    lang='scss'
>

</style>
