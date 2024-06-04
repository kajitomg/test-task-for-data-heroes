<script setup lang='ts'>

import FormField from '@/shared/components/form-field/form-field.vue';
import TextField from '@/shared/ui/text-field/text-field.vue';
import HomePageCharacter from '@/widgets/home-page-character/home-page-character.vue';
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue';
import { useCharacterStore } from '@/entities/character/store';

const character = useCharacterStore();
const value = ref<string>('');

watchEffect(() => {
  console.log(value.value);
});

const { data: characters, pagination } = storeToRefs(character);

const { load } = character;

load({ page: pagination?.value.currentPage });

</script>

<template>
  <main>
    <form-field label='Фильтр'>
      <text-field
        v-model='value'
        label='test'
      />
    </form-field>
    <home-page-character :characters='characters' />
  </main>
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
