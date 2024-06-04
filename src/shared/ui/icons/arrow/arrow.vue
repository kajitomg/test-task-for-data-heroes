<script setup lang='ts'>
enum Directions {
  'left' = 0,
  'top' = 1,
  'right' = 2,
  'bottom' = 3
}
enum Colors {
  'primary' = '#2196F3FF',
  'info' = 'black',
}
withDefaults(defineProps<{
  direction?: 'left' | 'right' | 'top' | 'bottom',
  color?: keyof typeof Colors | string,
}>(), {
  direction: 'left',
  color: Colors.primary,
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" :transform='`rotate(${Directions[direction] * 90})`'>
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" :fill='Colors[color] || color' />
  </svg>
</template>

