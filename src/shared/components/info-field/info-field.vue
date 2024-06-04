<script
    setup
    lang='ts'
>
defineProps<{
  header: string,
  data: string,
}>();
</script>

<template>
  <div class='info-field'>
    <h4 class='info-field__header'>{{ header }}</h4>
    <span class='info-field__data'>{{ data }}</span>
  </div>
</template>

<style
    scoped
    lang='scss'
>
.info-field {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__header {
    font-size: 16px;
    color: var(--c-text-dark-3);
    font-weight: 500;
    line-height: 26px;
  }

  &__data {
    cursor: pointer;
    font-size: 18px;
    line-height: 30px;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: var(--color-text-selection);
      }
    }
  }
}
</style>
