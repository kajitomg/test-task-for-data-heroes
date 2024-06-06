import {
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';

export default function useResize() {
  const width = ref<number>(window.innerWidth);

  const callbacks = {
    onResize() {
      width.value = window.innerWidth;
    },
  };

  onMounted(() => {
    window.addEventListener('resize', callbacks.onResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', callbacks.onResize);
  });

  return width;
}
