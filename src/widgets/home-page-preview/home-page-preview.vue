<script
    setup
    lang='ts'
>

import Background from '@/shared/ui/icons/background/background.vue';
</script>

<template>
  <div class='home-page-preview'>
    <div class='home-page-preview__background'>
      <background />
    </div>
    <div class='home-page-preview__content'>
      <h2>The Rick and Morty API</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page-preview {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: var(--c-white);

  &__content {
    position: absolute;

    & h2 {
      text-align: center;
      margin: 0px;
      color: var(--c-text-light-3);
      border: none;
      font-weight: 900;
      z-index: 1;
      font-size: 101.25px;

      @media (max-width: 790px) {
        font-size: 67.5px;
      }

      @media (max-width: 650px) {
        font-size: 56.25px;
      }
    }
  }
  svg {
    fill: rgb(245, 245, 245);
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
</style>
