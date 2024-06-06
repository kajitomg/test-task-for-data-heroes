<script
    setup
    lang='ts'
>

import Button from '@/shared/ui/custom-button/custom-button.vue';
import Arrow from '@/shared/ui/icons/arrow/arrow.vue';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref, watch, watchEffect,
} from 'vue';
import useResize from '@/shared/hooks/use-resize';
import usePagination, {
  DefaultPaginationVariants,
} from '@/shared/hooks/use-pagination';

enum CustomPaginationVariants {
  'adjacent' = 'adjacent',
  'combined' = 'combined',
}

const Variants = { ...CustomPaginationVariants, ...DefaultPaginationVariants };

type Variants = typeof Variants;

const props = withDefaults(defineProps<{
  maxPage?: number,
  variant?: keyof typeof Variants,
}>(), {
  variant: 'combined',
  maxPage: undefined,
});

const page = defineModel<number>('page', { default: 1 });

const {
  pages,
  nextPage,
  prevPage,
  setPage,
} = computed(() => usePagination({
  page,
  maxPage: computed(() => props.maxPage || page.value),
  options: {
    variant: computed(() => (props.variant === 'current' ? 'current' : 'numeric')),
  },
})).value;

const callbacks = {
  prevPage() {
    page.value = prevPage();
  },
  nextPage() {
    page.value = nextPage();
  },
  setPage(value: number | null) {
    page.value = setPage(value);
  },
};

</script>

<template>
  <div class='pagination'>
    <Button
      class='pagination__button pagination__button-arrow'
      :disabled='page <= 1'
      v-on:click='callbacks.prevPage'
      v-if='
        variant === Variants.combined
          || variant === Variants.adjacent
          || variant === Variants.current
      '
    >
      <arrow />
    </Button>
    <template
      v-for='(pagination, index) in pages'
      v-bind:key='`${index}_${pagination}`'
    >
      <Button
        v-if='
          variant === Variants.combined
            || variant === Variants.numeric
            || variant === Variants.current
        '
        :disabled='!pagination'
        :class='[pagination === page ? "available" : "", pagination ? "pagination__button" : "empty"]'
        v-on:click='() => callbacks.setPage(pagination)'
      >{{ pagination ? pagination : '...' }}
      </Button>
    </template>
    <Button
      class='pagination__button pagination__button-arrow'
      :disabled='!maxPage || page >= maxPage'
      v-on:click='callbacks.nextPage'
      v-if='
        variant === Variants.combined
          || variant === Variants.adjacent
          || variant === Variants.current
      '
    >
      <arrow direction='right' />
    </Button>
  </div>
</template>

<style
    scoped
    lang='scss'
>
.pagination {
  --btn-size: 40px;
  --btn-availabled-size: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: var(--btn-availabled-size);

  &__button {
    min-width: var(--btn-size);
    min-height: var(--btn-size);
    padding: 5px;
    font-weight: 500;
    border-radius: 50%;
    margin: 0 5px;
    transition: 0.3s ease-in-out;

    &.available {
      background-color: color-mix(in oklab,var(--c-blue), #000000 50%);

      width: var(--btn-availabled-size);
      height: var(--btn-availabled-size);
    }

    &:hover {
      background-color: color-mix(in oklab,var(--c-blue), #ffffff 25%);
    }
  }
  &__button-arrow {
    background-color: transparent;
    padding: 14px;

    &:hover {
      background-color: color-mix(in oklab,var(--c-white), transparent 90%);
    }

    &:disabled {
      cursor: default;
      &:hover {
        background-color: color-mix(in oklab,var(--c-black), transparent 90%);
      }
    }

  }
  .empty {
    cursor: default;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
    letter-spacing: 2px;
    background-color: transparent;
  }
}
</style>
