import { computed, type ComputedRef, ref } from 'vue';

export default function usePagination(props: {
  page: number,
  maxPage?: ComputedRef<number | undefined>,
}) {
  const page = ref(props?.page);

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
    pickPage(value: number | null) {
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

    if (result[1] - result[0] > 1) {
      result.splice(1, 0, NaN);
    }
    if (result[result.length - 1] - result[result.length - 2] > 1) {
      result.splice(result.length - 1, 0, NaN);
    }

    return result;
  });

  return {
    page: page.value,
    pages,
    maxPage,
    ...callbacks,
  };
}
