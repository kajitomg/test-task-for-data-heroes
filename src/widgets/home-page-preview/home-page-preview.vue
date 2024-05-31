<script
    setup
    lang='ts'
>

import Background from '@/shared/ui/icons/background/background.vue';
</script>

<template>
  <div class='preview'>
    <div class='preview_background'>
      <background />
    </div>
    <div class='preview_content'>
      <h2>The Rick and Morty API</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: #fff;
}
svg {
  fill: rgb(245, 245, 245);
}

.preview_content {
  position: absolute;

  & h2 {
    text-align: center;
    margin: 0px;
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    z-index: 1;
    font-size: 101.25px;
  }
}
</style>
