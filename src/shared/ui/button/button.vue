<script
    setup
    lang='ts'
>
const props = defineProps<{
  color?: 'primary',
  size?: 'medium',
}>();

const mergeClasses = (...elements) => elements.reduce((acc, element) => (element ? `${acc}${element[0]}__${element[1]} ` : acc), '');
</script>

<template>
  <button
    type='button'
    class='button'
    :class='mergeClasses(color && [`color`, color], size && [`size`, size])'
  >
    <slot />
  </button>
</template>

<style
    scoped
    lang='scss'
>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--c-blue);
  color: var(--color-text);
  font-size: 16px;
  padding: 8px 12px;

  .color__primary {
    background-color: #2196F3FF;
    color: var(--color-text);
  }
  .size__medium {
    font-size: 16px;
    padding: 8px 12px;
  }
}
</style>
