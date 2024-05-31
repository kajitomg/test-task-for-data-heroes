<script setup lang='ts'>
import axios from 'axios';
import InfoField from '@/shared/components/info-field/info-field.vue';
import StatusField from '@/shared/components/status-field/status-field.vue';
import CardItem from '@/shared/ui/card/card-item.vue';
import type { Character } from '@/entities/character/store';

const props = defineProps<{
  item: Character,
}>();

const episode = await axios.get(props.item.episode[0]);
</script>

<template>
  <card-item
    class='home-page-card'
    :title='item.name'
    :is='episode.data'
  >
    <template #start-image>
      <img
        :src='item.image'
        :alt='item.name'
      />
    </template>
    <template #title-info>
      <status-field
        :status='item.status'
        :species='item.species'
      />
    </template>
    <info-field
      class='home-page-card__info'
      :data='props.item.location.name'
      header='Last known location:'
    />
    <info-field
      class='home-page-card__info'
      :data='episode.data.name'
      header='First seen in:'
    />
  </card-item>
</template>

<style
    scoped
    lang='scss'
>
.home-page-card {
  height: 220px;
  width: 600px;
  background: rgb(60, 62, 68);

  & img {

    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  &__info {
    margin-top: 8px;
  }
}
</style>
