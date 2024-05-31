<script setup lang='ts'>

import CardItem from '@/shared/ui/card/card-item.vue';
import HomePageCardSkeleton from '@/widgets/home-page-card-skeleton/home-page-card-skeleton.vue';
import HomePageCard from '@/widgets/home-page-card/home-page-card.vue';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/entities/character/store';

const character = useCharacterStore();

const { data: characters } = storeToRefs(character);

const { load } = character;

load();

</script>

<template>
  <main>
    <div
      class='list'
    >
      <section
        v-for="character in characters"
        v-bind:key='character.id'
      >
        <Suspense>
          <home-page-card
            :item='character'
          />
        </Suspense>
      </section>
    </div>
  </main>
</template>

<style scoped>
.list {
  padding: 81px 0;
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 600px);
  gap: 24px;
}
</style>
