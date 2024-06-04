<script
    setup
    lang='ts'
>
import HomePageCharacterList from '@/widgets/home-page-character-list/home-page-character-list.vue';
import type { Character } from '@/entities/character/store';

defineProps<{
  characters: Character[]
}>();
</script>

<template>
  <div>
    <home-page-character-list :characters='characters' />
  </div>
</template>

<style
    scoped
    lang='scss'
>

</style>
