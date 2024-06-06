import {
  computed,
  type ComputedRef,
  onUpdated,
  type Ref,
  ref,
} from 'vue';

export enum DefaultPaginationVariants {
  'numeric' = 'numeric',
  'current' = 'current',
}

export default function usePagination(props: {
  page: Ref<number>,
  maxPage?: ComputedRef<number | undefined>,
  options?: {
    variant: ComputedRef<keyof typeof DefaultPaginationVariants>,
  }
}) {
  const page = ref(props.page.value);

  const maxPage = computed<number>(() => props?.maxPage?.value || page.value || 1);

  const callbacks = {
    prevPage() {
      page.value -= 1;
      return page.value;
    },
    nextPage(): number {
      page.value += 1;
      return page.value;
    },
    setPage(value: number | null) {
      if (value) page.value = value;
      return page.value;
    },
  };

  const pages = computed<number[]>(() => {
    const result = Array.from(new Set([
      1,
      Math.max(page.value - 1, 1),
      page.value,
      Math.min(page.value + 1, maxPage.value),
      maxPage.value,
    ]));

    if (props.options?.variant.value !== DefaultPaginationVariants.current) {
      if (result[1] - result[0] > 1) {
        result.splice(1, 0, NaN);
      }
      if (result[result.length - 1] - result[result.length - 2] > 1) {
        result.splice(result.length - 1, 0, NaN);
      }
    }

    if (props.options?.variant.value === DefaultPaginationVariants.current) {
      return [page.value];
    }
    return result;
  });

  onUpdated(() => {
    if (page.value !== props.page.value) {
      page.value = props.page.value;
    }
  });

  return {
    page: page.value,
    pages,
    maxPage,
    ...callbacks,
  };
}
