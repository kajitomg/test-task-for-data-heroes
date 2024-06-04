<script
    setup
    lang='ts'
>
import Pagination from '@/shared/components/pagination/pagination.vue';
import HomePageCard from '@/widgets/home-page-character-card/home-page-character-card.vue';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/entities/character/store';

const character = useCharacterStore();
const { pagination, info, data: characters } = storeToRefs(character);

</script>

<template>
  <div>
    <div
      class='home-page-character-list'
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
    <pagination
      :max-page='info?.pages'
      variant='combined'
      :page='pagination.currentPage'
      @update:page='(page: number) => character.load({ page })'
    />
  </div>
</template>

<style
    scoped
    lang='scss'
>

.home-page-character-list {
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
