<script
    setup
    lang='ts'
>
import FormField from '@/shared/components/form-field/form-field.vue';
import FormLayout from '@/shared/components/form-layout/form-layout.vue';
import Button from '@/shared/ui/custom-button/custom-button.vue';
import StyledSelect from '@/shared/ui/custom-select/custom-select.vue';
import TextField from '@/shared/ui/text-field/text-field.vue';
import { storeToRefs } from 'pinia';
import {
  computed,
} from 'vue';
import { type CharacterAliveStatus, useCharacterStore } from '@/entities/character/store';

const statuses: CharacterAliveStatus[] = [
  'Alive',
  'Dead',
  'unknown',
];

const character = useCharacterStore();
const { params } = storeToRefs(character);

const filters = computed<Record<string, string | number>>(() => {
  return {
    name: '',
    status: '',
    ...params?.value,
  };
});

const callbacks = {
  onSubmit() {
    character.setParams(filters.value);
    character.setCurrentPage(1);
  },
};

</script>

<template>
  <form-layout
    class='home-page-filters'
    title='Фильтры'
    @submit.prevent='callbacks.onSubmit'
  >
    <div class='home-page-filters__list'>
      <form-field label='Имя'>
        <text-field
          v-model='filters.name'
          label='Имя'
          placeholder='Введите имя'
          full-width
        />
      </form-field>
      <form-field label='Статус'>
        <styled-select
          v-model='filters.status'
          label='Статус'
          full-width
        >
          <option selected value=''>Выберите статус</option>
          <option
            v-for='status in statuses'
            :key='status'
          >{{ status }}</option>
        </styled-select>
      </form-field>
    </div>
    <template v-slot:actions>
      <Button
        class='home-page-filters__button'
        type='submit'
      >Применить</Button>
    </template>
  </form-layout>
</template>

<style
    scoped
    lang='scss'
>
.home-page-filters {
  &__list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 250px);

    @media (max-width: 400px) {
      grid-template-columns: repeat(auto-fit, 100%);
    }
  }
}
</style>
