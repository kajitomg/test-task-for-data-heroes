<script
    setup
    lang='ts'
>
import Spinner from '@/shared/ui/spinner/spinner.vue';
import HomePageCard from '@/features/home-page-character-card/home-page-character-card.vue';
import HomePageCharacterError from '@/widgets/home-page-character-error/home-page-character-error.vue';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/entities/character/store';

const character = useCharacterStore();
const { data: characters, status } = storeToRefs(character);

</script>

<template>
  <div>
    <div
      class='home-page-character-list'
    >
      <section
        v-for="character in characters"
        v-bind:key='character.id'
        v-if='status === "success"'
      >
        <Suspense>
          <home-page-card
            :item='character'
          />
        </Suspense>
      </section>
      <section
        class='home-page-character-list__loader'
        v-if='status === "loading"'
      >
        <spinner />
      </section>
      <home-page-character-error
        title='Нет соответствий'
        v-if='status === "error"'
      />
    </div>
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

  &__loader {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
