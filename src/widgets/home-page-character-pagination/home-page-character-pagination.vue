<script
    setup
    lang='ts'
>

import Pagination from '@/shared/components/pagination/pagination.vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useCharacterStore } from '@/entities/character/store';
import useResize from '@/shared/hooks/use-resize';

const character = useCharacterStore();
const { pagination, status } = storeToRefs(character);

const width = useResize();
const isMediaQueryS = computed<boolean>(() => width.value <= 600);

const callbacks = {
  async onSetPage(page: number) {
    await character.setCurrentPage(page);
    window.scrollTo({ top: 0 });
  },
};

</script>

<template>
  <pagination
    v-if='status === "success"'
    class='home-page-character-pagination'
    :max-page='pagination.maxPages'
    :variant='isMediaQueryS ? "current" : "combined"'
    :page='pagination.currentPage'
    @update:page='callbacks.onSetPage'
  />
</template>

<style
    scoped
    lang='scss'
>

</style>